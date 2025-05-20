"use server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { O } from "@/app/api/liveblocks-auth/route";
import { log } from "console";

export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();
  const org : O = sessionClaims?.o as O;

  const response = await clerk.users.getUserList({
    organizationId: [org.id as string],
  });

  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
  }));

  return users;
}
