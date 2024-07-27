import "react-native-url-polyfill/auto";
import { createClient, SupportedStorage } from "@supabase/supabase-js";
import { MMKV } from "react-native-mmkv";

const supabaseUrl = process.env.EXPO_PUBLIC_DATABASE_URL || "";
const supabaseAnonKey = process.env.EXPO_PUBLIC_DATABASE_ANON_KEY || "";

const storage = new MMKV({ id: "supabase.storage" });
const mmkvStorageConfig: SupportedStorage = {
  setItem: (key: string, data: string) => storage.set(key, data),
  getItem: (key: string) => storage.getString(key) || null,
  removeItem: (key: string) => storage.delete(key),
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: mmkvStorageConfig,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
