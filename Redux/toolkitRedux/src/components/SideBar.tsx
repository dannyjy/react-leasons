import { NavLink } from "react-router"

export default function SideBar() {
    return (
        <div className="bg-black h-screen p-4 text-gray-200 w-70 space-y-40">
            <h1 className="text-2xl font-medium">ReduxToolkit<span className="text-blue-800">State</span></h1>
            <ul className="flex flex-col justify-center gap-4 text-xl w-full">
                <NavLink to='.' className={({ isActive }) => `font-medium py-2 pl-2 pr-6 rounded-md ${isActive ? "border-r-3 bg-gray-800" : ""}`}><li>Profile</li></NavLink>
                {/* <NavLink to='tasks' className={({ isActive }) => `font-medium py-2 pl-2 pr-6 rounded-md ${isActive ? "border-r-3 bg-gray-800" : ""}`}><li>Tasks Page</li></NavLink> */}
            </ul>
        </div>
    )
}