import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabase = createClient(
  { localStorage: AsyncStorage as any }
);

export default supabase;
