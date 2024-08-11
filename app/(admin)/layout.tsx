import Sidebar from "@/components/admin/sidebar";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="max-w-[270px] w-full">
        <Sidebar />
      </div>

      <div className="container mt-32 lg:mt-16">{children}</div>
    </div>
  );
}
