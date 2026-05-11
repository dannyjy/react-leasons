import { Outlet } from "react-router";
import SideBar from "../components/SideBar";
import CounterContextProvider from "../providers/CounterContextProvider";
import UserContextProvider from "../providers/UserContextProvider";

export default function RootLayout() {
  console.log("Rendered RootLayout")
  return (
    <CounterContextProvider>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <main className="p-4 overflow-y-auto">
          <UserContextProvider>
            <Outlet />
          </UserContextProvider>
        </main>
      </div>
    </CounterContextProvider>
  )
}