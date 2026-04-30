import { useLocation } from "react-router"

const OneUserPosts = () => {
    // const [searchParams] =  useSearchParams()
    const { search } = useLocation()
    const user = new URLSearchParams(search)
    console.log(user.get("userId"))

    return (
        <div>
            <h1>Future King</h1>
        </div>
    )
}

export default OneUserPosts