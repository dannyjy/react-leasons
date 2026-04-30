import type { FunctionComponent } from 'react';
import { NavLink } from 'react-router';
 
const Navbar: FunctionComponent = () => {
    return ( 
        <div className='bg-zinc-800 text-white p-4 flex justify-between items-center sticky top-0 z-10'>
            <h1 className='text-2xl'>Neo<span className='text-amber-200'>N</span></h1>
            <ul className='flex gap-4'>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "text-amber-200" : ""}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-amber-200" : ""}>About</NavLink></li>
                <li><NavLink to="/posts" className={({ isActive }) => isActive ? "text-amber-200" : ""}>Posts</NavLink></li>
            </ul>
            <button className='bg-[#fffbeb] rounded-lg py-2 px-6 text-black font-medium text-sm'>Login</button>
        </div>
     );
}
 
export default Navbar;