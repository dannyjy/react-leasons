import { Outlet } from "react-router"
import Navbar from "./Navbar"

function Main() {
  return (
    <div className="">
        <Navbar />
        <main className="h-full">
            <Outlet />
        </main>
    </div>
  )
}

export default Main