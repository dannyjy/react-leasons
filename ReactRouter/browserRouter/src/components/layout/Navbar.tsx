import type { FunctionComponent } from 'react';
import { Link } from 'react-router';
 
const Navbar: FunctionComponent = () => {
    return ( 
        <div className='bg-zinc-800 text-white p-4 flex justify-between items-center '>
            <h1>BrowserRouter</h1>
            <ul className='flex gap-4'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
            <button className='bg-gray-500 rounded-lg py-2 px-4'>Login</button>
        </div>
     );
}
 
export default Navbar;