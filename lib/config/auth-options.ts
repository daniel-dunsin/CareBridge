import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { publicApi } from "./axios-instance";
import { ApiResponse, ITokens, IUser } from "../types";

const refreshToken = async (tokens: ITokens) => {
  try {
    const { data } = await publicApi.post<ApiResponse<ITokens>>("/auth/session/refresh", {
      refreshToken: tokens.refreshToken,
    });

    return data.data;
  } catch (err: any) {
    console.log(err?.response?.data || "An error occurred");
  }
};

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Name" },
        password: { label: "Password" },
      },
      authorize: async (credentials, _req) => {
        if (!credentials || !credentials.email || !credentials.password) return null;
        const { email, password } = credentials;

        try {
          const { data } = await publicApi.post<ApiResponse<{ user: IUser; meta: ITokens }>>("/auth/signin", {
            password,
            email: email.includes("@") ? email : "",
            phoneNumber: !email.includes("@") ? email : "",
          });

          const {
            data: { user, meta },
          } = data;

          const id = user._id;

          return { id, ...user, meta };

          // return { id: crypto.randomUUID() }
        } catch (err) {
          console.log({ err });
          return null;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      // @ts-ignore
      if (user) token.user = user as IUser;
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;

      const now = new Date().getTime();

      await refreshToken(session.user.meta);
      if (now > session.user.meta.lifeSpan) {
        const tokens = await refreshToken(session.user.meta);
        if (!tokens) throw new Error("Unauthorized, Token Expired");
        session.user.meta = tokens;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
};

export default authOptions;
