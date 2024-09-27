"use server";

import { StreamClient } from "@stream-io/node-sdk";
import { getServerSession } from "next-auth";
import authOptions from "../config/auth-options";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("User is not logged in");
  }

  const user = session.user!;

  if (!apiKey || !apiSecret) {
    throw new Error("Stream API Key and Secret are not set");
  }

  const client = new StreamClient(apiKey, apiSecret);

  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
  const issued = Math.floor(new Date().getTime() / 1000);

  const token = client.createToken(user._id, exp, issued);

  return token;
};
