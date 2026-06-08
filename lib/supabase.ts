import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client using the service role key.
 * Returns null when env vars are not configured so the site
 * renders gracefully without a database (e.g. local preview).
 */
export function getServiceClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { persistSession: false } });
}

export type Story = {
  id: string;
  display_name: string | null;
  is_anonymous: boolean;
  body: string;
  occurred_on: string | null;
  media_urls: string[] | null;
  created_at: string;
};

export type Report = {
  id: string;
  category: "noise" | "alley" | "traffic" | "neighborhood";
  title: string;
  body: string | null;
  occurred_on: string | null;
  media_urls: string[] | null;
  created_at: string;
};

export async function getApprovedStories(): Promise<Story[]> {
  const db = getServiceClient();
  if (!db) return [];
  const { data } = await db
    .from("stories")
    .select(
      "id, display_name, is_anonymous, body, occurred_on, media_urls, created_at"
    )
    .eq("status", "approved")
    .order("occurred_on", { ascending: false, nullsFirst: false });
  return data ?? [];
}

export async function getApprovedReports(): Promise<Report[]> {
  const db = getServiceClient();
  if (!db) return [];
  const { data } = await db
    .from("reports")
    .select("id, category, title, body, occurred_on, media_urls, created_at")
    .eq("status", "approved")
    .order("occurred_on", { ascending: false, nullsFirst: false });
  return (data ?? []) as Report[];
}

/**
 * Petition counter. Hidden until the petition launches:
 * set site_settings key "counter_visible" to "true" in Supabase
 * to display the live signup count.
 */
export async function getCounter(): Promise<{
  visible: boolean;
  count: number;
}> {
  const db = getServiceClient();
  if (!db) return { visible: false, count: 0 };

  const { data: setting } = await db
    .from("site_settings")
    .select("value")
    .eq("key", "counter_visible")
    .maybeSingle();

  if (setting?.value !== "true") return { visible: false, count: 0 };

  const { data: baseline } = await db
    .from("site_settings")
    .select("value")
    .eq("key", "counter_baseline")
    .maybeSingle();

  const { count } = await db
    .from("petition_interest")
    .select("id", { count: "exact", head: true });

  return {
    visible: true,
    count: (count ?? 0) + (parseInt(baseline?.value ?? "0", 10) || 0),
  };
}
