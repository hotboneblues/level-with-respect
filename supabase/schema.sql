-- Level With Respect — Supabase schema
-- Run this in the Supabase SQL editor (Database → SQL Editor → New query).

-- 1. Petition interest list (pre-launch email capture)
create table if not exists petition_interest (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  street_name text not null,
  created_at timestamptz not null default now(),
  unique (email)
);

-- 2. Community stories (moderated — nothing is public until approved)
create table if not exists stories (
  id uuid primary key default gen_random_uuid(),
  display_name text,
  is_anonymous boolean not null default false,
  contact_email text,            -- never displayed publicly
  body text not null,
  occurred_on date,
  media_urls text[],
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

-- 3. Issue documentation reports (moderated)
create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('noise','alley','traffic','neighborhood')),
  title text not null,
  body text,
  contact_email text,            -- never displayed publicly
  occurred_on date,
  media_urls text[],
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

-- 4. Site settings (editable without redeploying)
create table if not exists site_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);

-- Counter is HIDDEN until the petition officially launches.
-- To launch: set counter_visible to 'true'. The site then displays
-- the real row count of petition_interest plus counter_baseline.
insert into site_settings (key, value) values
  ('counter_visible', 'false'),
  ('counter_baseline', '0')
on conflict (key) do nothing;

-- 5. Lock everything down. The site only talks to the database through
-- server actions using the service role key, so no public policies are needed.
alter table petition_interest enable row level security;
alter table stories enable row level security;
alter table reports enable row level security;
alter table site_settings enable row level security;

-- 6. Storage bucket for resident-submitted photos and video.
-- Files are publicly readable once uploaded (URLs are only shown
-- after a submission is approved), but only the server can write.
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- MODERATION WORKFLOW
-- New stories/reports arrive with status = 'pending'.
-- Review them in Table Editor and set status to 'approved' to publish
-- or 'rejected' to hide. Only approved rows ever appear on the site.
