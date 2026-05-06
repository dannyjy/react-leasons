import { NavLink } from "react-router"

export default function SideBar() {
  return (
    <div className="bg-zinc-800 h-screen p-4 text-gray-200 w-70">
        <ul>
            <li><NavLink to='/counter'>Couter Page</NavLink></li>
        </ul>
    </div>
  )
}