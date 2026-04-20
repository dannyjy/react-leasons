import { Outlet } from "react-router"
import Navbar from "./Navbar"

function Main() {
  return (
    <div className="bg-zinc-100">
        <Navbar />
        <main className="h-screen">
            <Outlet />
        </main>
    </div>
  )
}

export default Main