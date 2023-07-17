import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import Landing from "@/components/home/landing";
import Chat from "@/components/home/chat"

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    // // // //comment this
    session !== null ? (
      <Chat />
    ) : (
      <Landing />
    )
    // // // //till this
    // <Chat/>
  );
}
