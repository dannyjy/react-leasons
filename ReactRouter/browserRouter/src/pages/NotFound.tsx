import { useState } from "react"
import { useLocation } from "react-router"

const NotFound = () => {
    const [text] = useState("fdafd")
    const location = useLocation()
    console.log(location)
    console.log(text)
    return (
        <div className='bg-zinc-900 text-gray-300 flex justify-center pt-12 h-screen'>
            <div className="text-center space-y-4">
                <h2 className='text-7xl'>404 Not Found</h2>
                <p className="text-2xl">Page <span className="text-gray-400">{location.pathname}</span> does not exist</p>
            </div>
        </div>
    )
}

export default NotFound