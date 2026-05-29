import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Read-only Supabase client for the web viewer.
 * No auth persistence needed — all queries use the anon key
 * and rely on RLS SELECT policies for public data access.
 *
 * IMPORTANT: We pass `cache: 'no-store'` to the global fetch options
 * because Next.js App Router caches fetch() calls by default, even
 * inside force-dynamic pages. Without this, Supabase queries return
 * stale data from the build-time or first-request cache.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: (url, options = {}) => {
      return fetch(url, { ...options, cache: 'no-store' });
    },
  },
});
