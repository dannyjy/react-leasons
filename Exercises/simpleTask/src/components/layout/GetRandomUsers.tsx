import { useEffect, useState } from 'react'
import UserCard from '../ui/UserCard';
import type { UserProp } from '../../types/types';

const GetRandomUsers = () => {
    const [userData, setUserData] = useState<UserProp[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    async function getUsers() {
        try {
            setIsLoading(true)
            const response = await fetch("https://randomuser.me/api/0.8/?results=10")
            if(!response.ok){
                throw new Error(`Error fetching data status ${response.status}`)
            }
            const data = await response.json()
            const results: UserProp[] = data.results;
            setUserData(results)
            console.log(results)
        } catch (error) {
            if(error instanceof Error)
                console.log(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    
    useEffect(() => {
        getUsers();
    },[])

    return (
        <div className='text-center space-y-4 bg-pink-900 py-2'>
            <button onClick={getUsers} className='bg-red-800 px-5 py-3 rounded text-2xl'>Fetch Random</button>
            <section className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] justify-center items-center gap-3 bg-amber-400'>
                {
                    isLoading ? <h1>Loading...</h1> : (
                        userData.length < 0 ? <h1>No data found</h1> : (
                            userData.map((data) => <UserCard key={data.user.username} {...data}/>)
                        )
                    )
                }
            </section>
        </div>
    )
}

// https://randomuser.me/api/0.8/?results=10

export default GetRandomUsers