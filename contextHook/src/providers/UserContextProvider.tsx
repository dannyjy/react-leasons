import React from 'react'
import { UserContext } from '../context/context'

const UserContextProvider = ({children} : { children: React.ReactNode}) => {
    const value = {
        fullName: "John Doe",
        userName: "johnny214",
        email: "john93@gmail.com"
    }
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider