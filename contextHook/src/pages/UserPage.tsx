import { UserContext } from "../context/context"
import { useContext, useState } from "react"
import type { UserType } from "../types/types"

const UserPage = () => {
    const [isAuth, setIsAuth] = useState(false)
    const { userName } = useContext(UserContext) as UserType

    const getUser = () => setIsAuth(true);
    
    return (
        <div>
            {
                !isAuth ? <button onClick={getUser} className="bg-black px-5 py-2 rounded-md text-gray-200 cursor-pointer">Get User</button>
                    : (
                        <div>
                            <h1>User Name: {userName}</h1>
                        </div>
                    )

            }
        </div>
    )
}

export default UserPage