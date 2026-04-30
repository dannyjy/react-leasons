import { useState, useEffect } from 'react'
import type { PostType } from "../types/types"
import Post from '../components/ui/PostCard'
import { useNavigate } from 'react-router'

const Posts = () => {
    const [posts, setPosts] = useState <PostType[]>([])
    // const [page, setPage] = useState(10)
    const navigate = useNavigate()

    const handleViewPost = (id: number) => navigate(`/posts/${id}`, { state: id})
    const handleUserPosts = (id: number) => navigate(`/posts?userId=${id}`)

    useEffect(() => {
        async function getAllPosts() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if(!response.ok){
                    throw new Error(`Error with status: ${response.status}`)
                }

                const data = await response.json();
                setPosts(data)
            } catch (error) {
               if(error instanceof Error) {
                console.log(error.message)
               }
            }
        }

        getAllPosts()
    },[])

    return (
        <main>
            {}
            <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 p-4'>
                {
                    posts.length <= 0 ? <h1 className='text-center'>No posts avialable</h1> :
                    posts.map(post => <Post key={post.id} {...post} onViewPost={handleViewPost} onUserPosts={handleUserPosts}/>)
                }
            </div>
        </main>
    )
}

export default Posts

// https://jsonplaceholder.typicode.com/photos
// https://jsonplaceholder.typicode.com/albums
// http://www.omdbapi.com/?apikey=1b719c16