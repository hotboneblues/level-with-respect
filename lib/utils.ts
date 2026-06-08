import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://levelwithrespect.com";

export const SITE_NAME = "Level With Respect";

export const DISCLAIMER =
  "Level With Respect is an independent resident advocacy website and is not affiliated with, endorsed by, or sponsored by LEVEL Venue.";
