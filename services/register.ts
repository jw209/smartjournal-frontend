import supabase from "./supabaseClient";

const register = async (email: string, password: string) => {
  const { user, session, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return {
      error,
      user: null,
      auth: null,
    };
  }

  return { user, session, error: null };
};

export default register;
