import { useLocation, useNavigate, useParams } from "react-router";
import type { PostType } from "../../types/types";
import { useEffect, useState } from "react";

const SinglePost = () => {
    const [post, SetPost] = useState<PostType>({ userId: 0, id: 0, title: "", body: ""});  
    const { postId } = useParams()
    const navigation = useNavigate()
    const location = useLocation()
    console.log(location.state)

    useEffect(() => {
        async function getPost() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                // const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${location.state}`);
                if(!response.ok){
                    throw new Error(`Error with a status: ${response.status}`)
                }
                
                const data: PostType = await response.json();   
                SetPost(data)
            } catch (error) {
                if(error instanceof Error){
                    console.log(error.message)
                }
            }
        }        
        getPost()
    },[postId])

    return (
        <div className="p-4">
            <button onClick={() => navigation(-1)} className="cursor-pointer">Back</button>
            <section className="flex gap-4 pt-4">
                <img src="https://m.media-amazon.com/images/I/61rKeg3aOmL._AC_SL1000_.jpg" alt="" className="aspect-auto"/>
                <div className="">
                    <h2 className="font-bold text-2xl uppercase">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </section>
        </div>
    )
}

export default SinglePost