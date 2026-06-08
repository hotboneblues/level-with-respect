"use server";

import { getServiceClient } from "@/lib/supabase";

type ActionResult = { ok: boolean; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null, max = 200): string {
  return String(value ?? "").trim().slice(0, max);
}

export async function submitPetitionInterest(
  formData: FormData
): Promise<ActionResult> {
  // Honeypot — bots fill every field
  if (clean(formData.get("company"))) return { ok: true, message: "Thank you." };

  const firstName = clean(formData.get("firstName"), 80);
  const lastName = clean(formData.get("lastName"), 80);
  const email = clean(formData.get("email"), 200).toLowerCase();
  const streetName = clean(formData.get("streetName"), 120);

  if (!firstName || !lastName || !streetName) {
    return { ok: false, message: "Please fill in every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const db = getServiceClient();
  if (!db) {
    return {
      ok: false,
      message:
        "Submissions are not live yet — the database is not configured. Please check back soon.",
    };
  }

  const { error } = await db.from("petition_interest").insert({
    first_name: firstName,
    last_name: lastName,
    email,
    street_name: streetName,
  });

  if (error) {
    if (error.code === "23505") {
      return { ok: true, message: "You are already on the list — thank you." };
    }
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return {
    ok: true,
    message:
      "Thank you. We will email you the moment signatures officially open.",
  };
}

const ALLOWED_MEDIA = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "video/mp4",
  "video/quicktime",
  "video/webm",
];
const MAX_FILE_BYTES = 20 * 1024 * 1024; // 20 MB

async function uploadMedia(files: File[]): Promise<string[]> {
  const db = getServiceClient();
  if (!db) return [];
  const urls: string[] = [];
  for (const file of files.slice(0, 4)) {
    if (!file.size || file.size > MAX_FILE_BYTES) continue;
    if (!ALLOWED_MEDIA.includes(file.type)) continue;
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await db.storage
      .from("media")
      .upload(path, file, { contentType: file.type });
    if (!error) {
      const { data } = db.storage.from("media").getPublicUrl(path);
      urls.push(data.publicUrl);
    }
  }
  return urls;
}

export async function submitStory(formData: FormData): Promise<ActionResult> {
  if (clean(formData.get("company"))) return { ok: true, message: "Thank you." };

  const body = clean(formData.get("body"), 5000);
  const isAnonymous = formData.get("anonymous") === "on";
  const displayName = isAnonymous ? null : clean(formData.get("name"), 80) || null;
  const contactEmail = clean(formData.get("email"), 200).toLowerCase() || null;
  const occurredOn = clean(formData.get("occurredOn"), 10) || null;

  if (body.length < 20) {
    return {
      ok: false,
      message: "Please share a little more detail (at least a few sentences).",
    };
  }
  if (contactEmail && !EMAIL_RE.test(contactEmail)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const db = getServiceClient();
  if (!db) {
    return {
      ok: false,
      message:
        "Submissions are not live yet — the database is not configured. Please check back soon.",
    };
  }

  const files = formData
    .getAll("media")
    .filter((f): f is File => f instanceof File && f.size > 0);
  const mediaUrls = await uploadMedia(files);

  const { error } = await db.from("stories").insert({
    display_name: displayName,
    is_anonymous: isAnonymous,
    contact_email: contactEmail,
    body,
    occurred_on: occurredOn,
    media_urls: mediaUrls.length ? mediaUrls : null,
  });

  if (error) {
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return {
    ok: true,
    message:
      "Thank you. Every submission is reviewed before publication — your story will appear once approved.",
  };
}

export async function submitReport(formData: FormData): Promise<ActionResult> {
  if (clean(formData.get("company"))) return { ok: true, message: "Thank you." };

  const category = clean(formData.get("category"), 20);
  const title = clean(formData.get("title"), 140);
  const body = clean(formData.get("body"), 5000) || null;
  const contactEmail = clean(formData.get("email"), 200).toLowerCase() || null;
  const occurredOn = clean(formData.get("occurredOn"), 10) || null;

  if (!["noise", "alley", "traffic", "neighborhood"].includes(category)) {
    return { ok: false, message: "Please choose a category." };
  }
  if (!title) {
    return { ok: false, message: "Please add a short title." };
  }
  if (contactEmail && !EMAIL_RE.test(contactEmail)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const db = getServiceClient();
  if (!db) {
    return {
      ok: false,
      message:
        "Submissions are not live yet — the database is not configured. Please check back soon.",
    };
  }

  const files = formData
    .getAll("media")
    .filter((f): f is File => f instanceof File && f.size > 0);
  const mediaUrls = await uploadMedia(files);

  const { error } = await db.from("reports").insert({
    category,
    title,
    body,
    contact_email: contactEmail,
    occurred_on: occurredOn,
    media_urls: mediaUrls.length ? mediaUrls : null,
  });

  if (error) {
    return { ok: false, message: "Something went wrong. Please try again." };
  }

  return {
    ok: true,
    message:
      "Thank you. Documentation is reviewed before publication and will appear once approved.",
  };
}
