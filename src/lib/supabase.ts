export function isSupabaseConfigured(): boolean {
  if (typeof process === "undefined") return false
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return !!(url && key && url !== "placeholder")
}

export function getSupabaseConfig(): { url: string; key: string } | null {
  if (!isSupabaseConfigured()) return null
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  }
}
