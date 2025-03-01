import { getServerSession } from "next-auth";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./lib/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="">
      <UserInfo />
      {JSON.stringify(session)}
    </div>
  );
};