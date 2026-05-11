import { NavLink } from "react-router"

export default function SideBar() {
    console.log("Rendered SideBar")
    return (
        <div className="bg-black text-gray-200 space-y-16 p-4 w-70 shrink-0">
            <h1 className="text-3xl">React Context</h1>
            <ul className="space-y-2 flex flex-col">
                <NavLink to="." className={({ isActive }) =>`p-2 ${isActive ? "active-navigation" : ""}`}><li>User</li></NavLink>
                <NavLink to="counter" className={({ isActive }) =>`p-2 ${isActive ? "active-navigation" : ""}`}><li>Counter</li></NavLink>
            </ul>
        </div>
    )
}
