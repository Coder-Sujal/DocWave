"use server";

import { ConvexHttpClient } from "convex/browser"; 
import { auth, clerkClient } from "@clerk/nextjs/server";
import { O } from "@/app/api/liveblocks-auth/route";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids : Id<"documents">[]) {
   return await convex.query(api.documents.getByIds,{ids});
}


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
