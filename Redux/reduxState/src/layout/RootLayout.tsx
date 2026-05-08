import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <div className="flex overflow-hidden h-screen">
      <SideBar />
      <main className="overflow-y-auto w-full no-scrollbar">
        <Outlet />
      </main>
    </div>
  )
}