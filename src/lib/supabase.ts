import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Read-only Supabase client for the web viewer.
 * No auth persistence needed — all queries use the anon key
 * and rely on RLS SELECT policies for public data access.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
