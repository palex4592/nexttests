import SideNav from "../ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      {children}
    </div>
  );
}
