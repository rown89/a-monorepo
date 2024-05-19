import { createBrowserClient } from "@supabase/ssr";

export const supabaseClient = createBrowserClient(
  /* <Database> */ process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const client = supabaseClient;

export async function userSession() {
  try {
    const session = await client.auth.getSession();
    return session.data.session;
  } catch (error) {
    console.log("User Warning ", error);
    return null;
  }
}
