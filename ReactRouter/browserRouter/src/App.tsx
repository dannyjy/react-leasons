import { BrowserRouter, Routes, Route, useSearchParams } from "react-router"
import Main from "./layout/Main"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Posts from "./pages/Posts"
import SinglePost from "./components/ui/SinglePost"
import OneUserPosts from "./pages/OneUserPosts"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="posts" element={<PostsRoute />} />
                    <Route path="posts/:postId" element={<SinglePost />} />
                </Route>

                <Route path="*" element={<NotFound />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default App

function PostsRoute() {
  const [searchParams] = useSearchParams()

  return searchParams.has("userId") ? <OneUserPosts /> : <Posts />
}