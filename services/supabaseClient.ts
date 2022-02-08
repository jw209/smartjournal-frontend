import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabase = createClient(
  "https://bwraegmxihrflnnytmgc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQzMjM1NDkxLCJleHAiOjE5NTg4MTE0OTF9.1V-r65flBzorokd1BAH0Sjdcxef-ZSuVo_xfEl2T9Zo",
  { localStorage: AsyncStorage as any }
);

export default supabase;
