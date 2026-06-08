import { getCounter } from "@/lib/supabase";

/**
 * Live community counter. Hidden until the petition launches —
 * flip `counter_visible` to "true" in the site_settings table.
 * Shows the real signup count (plus any admin-set baseline).
 */
export async function PetitionCounter() {
  const { visible, count } = await getCounter();
  if (!visible || count < 1) return null;
  return (
    <p className="text-sm font-medium tracking-wide text-clay-deep">
      {count.toLocaleString("en-US")}{" "}
      {count === 1 ? "Resident" : "Residents and Neighbors"} Supporting
      Responsible Operation
    </p>
  );
}
