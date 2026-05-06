import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  )
}