import { NavLink, useLocation } from 'react-router';
import { useEffect } from 'react';

const About = () => {
    const { hash } = useLocation();
    console.log(hash)

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return (
        <div className="grid grid-cols-10 h-screen overflow-hidden bg-amber-50">
            <aside className="col-span-2 bg-[#b9b39e] text-2xl overflow-y-auto p-4">
                <ul className='flex justify-center flex-col items-center gap-4'>
                    <li><NavLink to="/about/#mission" className={({isActive}) => isActive ? "bg-gray-500 px-4 rounded" : "bg-none"}>Our Mission</NavLink></li>
                    <li><NavLink to="/about/#team">Meet the Team</NavLink></li>
                    <li><NavLink to="/about/#vision">Our Vision</NavLink></li>
                </ul>
            </aside>
            <main className="col-span-8 p-4 pt-10 overflow-y-auto no-scrollbar ">
                <div id="mission" className="min-h-150 text-center p-5 border-b-2 border-gray-300">
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p>
                    We strive to empower developers by providing clean, accessible, and
                    highly performant routing solutions. Our goal is to make the web
                    feel as seamless as a native application.
                </p>
                </div>

                <div id="team" className=" min-h-150 text-center border-b-2 border-gray-300 p-5">
                <h2 className="text-4xl font-bold">Meet the Team</h2>
                <p>
                    Our diverse group of engineers and designers work remotely from across
                    the globe. We believe that great code comes from healthy collaboration
                    and a shared passion for user experience.
                </p>
                </div>

                <div id="vision" className="min-h-150 text-center p-5 ">
                <h2 className="text-4xl font-bold">Our Vision</h2>
                <p>
                    Looking forward, we aim to bridge the gap between complex data structures
                    and intuitive navigation. We are building the tools for the next
                    generation of the decentralized web.
                </p>
                </div>
            </main>
        </div>
    )
}

export default About