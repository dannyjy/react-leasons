// import React from 'react'

const Header = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-50 shadow-xl mb-4">
        <h1 className="font-bold text-2xl">Prop<span className="text-blue-700">s</span></h1>
        <ul className="flex gap-3">
            <li>Contact</li>
            <li>Home</li>
            <li>About</li>
        </ul>
        <button className="bg-blue-100 px-4 py-2 rounded-xl">Submit</button>
    </nav>
  )
}

export default Header