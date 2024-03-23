import { IUser } from "../interface";

const user: IUser = {
  id: 1,
  username: "luxolis",
};

export const signIn = async (query: FormData) => {
  const username = query.get("username")?.toString();
  const password = query.get("password")?.toString();

  if (username === "test@luxpmsoft.com" && password === "test1234!")
    return { data: user, status: 200, message: "Successfully signed in!" };

  throw new Error("Invalid credentials!");
};
