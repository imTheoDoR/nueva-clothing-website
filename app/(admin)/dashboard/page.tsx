import { currentUser } from "@clerk/nextjs/server";
import { LayoutDashboard } from "lucide-react";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <>
      <h1 className="flex items-center text-lg font-bold">
        <LayoutDashboard className="text-nueva-orange mr-2" /> Dashboard
      </h1>
      <div className="text-base font-normal mt-16">
        Salut{" "}
        <b className="font-semibold text-nueva-orange">{user?.fullName}</b>,
        ești conectat în panoul administrativ. Folosește sidebar-ul pentru a
        naviga în panou.
      </div>
    </>
  );
}
