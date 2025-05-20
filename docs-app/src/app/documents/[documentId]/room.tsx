"use client";

import { ReactNode, use, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { FullScreenLoader } from "@/components/fullscreen-loader";
import { getUsers } from "./actions";
import { toast } from "sonner";
import { log } from "console";

type User = {
  id: string;
  name: string;
  avatar: string;
};

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();

  const [users, setUsers] = useState<User[]>([]);

  const fethUsers = useMemo(
    () => async () => {
      try {
        const list = await getUsers();
        setUsers(list);
      } catch (e) {
        toast.error("Failed to fetch users");
      }
    },
    []
  );

  useEffect(() => {
    fethUsers();
  }, [fethUsers]);

  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint="/api/liveblocks-auth"
      resolveUsers={({ userIds }) => {
        console.log(
          users,userIds
        );

        return userIds.map(
          (userId) => users.find((user) => user.id === userId) ?? undefined
        );
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;

        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        }

        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={() => []}
    >
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense
          fallback={<FullScreenLoader label="Room loading" />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
