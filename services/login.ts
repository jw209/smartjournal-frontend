import supabase from "./supabaseClient";

const login = async (email: string, password: string) => {
  const { user, session, error } = await supabase.auth.signIn({
    email,
    password,
  });

  if (error) {
    return { error, user: null, session: null };
  }

  return { user, session, error: null };
};

export default login;
