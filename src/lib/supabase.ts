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

/**
 * Admin Supabase client — uses the service_role key to bypass RLS.
 * ONLY used server-side for signing private storage URLs (card-media bucket).
 * The service role key is never exposed to the browser.
 */
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
      global: {
        fetch: (url, options = {}) => {
          return fetch(url, { ...options, cache: 'no-store' });
        },
      },
    })
  : null;
