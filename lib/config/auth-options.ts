import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = { id: crypto.randomUUID(), name: "CareBridge" };
        return user;
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/",
  },
};

export default authOptions;
