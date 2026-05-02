// import React from 'react'
import { useEffect, useState } from "react"
import UserCard from "../ui/UserCard"
import type { User, RandomUserResponse } from "../types/types" 

const Main = () => {
    const [data, setData] = useState<User[]>([])
    const [isLoading,setIsLoading] = useState<boolean>(false)

    async function fetchData(){
        setIsLoading(true)
        try {
            const response = await fetch("https://randomuser.me/api");
            if(!response.ok){
                throw new Error(`Couldn't fetch data: Erro ${response.status}`)
            }
            const responseData: RandomUserResponse = await response.json()
            console.log(responseData.results)
            setData(responseData.results)
        } catch (error: unknown) {
            if(error instanceof Error){
                console.log(error.message)
            }
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return (
        <div className="px-10 space-y-10">
            <section className="flex justify-between items-center">
                <h1 className="text-2xl font-medium">User</h1>
                <button 
                    className="bg-black py-3 px-4 rounded-2xl text-white cursor-pointer"
                    onClick={fetchData}
                >Generate New User</button>
            </section>
            <main className="h-screen grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
                {
                    isLoading ? <h1>Loading....</h1> :
                    data.length > 0 ? data.map((result) => (
                        <UserCard
                            key={result.email}
                            imageUrl={result.picture.large}
                            Name={`${result.name.first} ${result.name.last}`}
                            Email={result.email}
                            Country={result.location.country}
                        />
                    )) : <h1>No data fetched yet</h1>
                }
            </main>
        </div>
    )
}

export default Main