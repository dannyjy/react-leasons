import { BrowserRouter, Routes, Route } from "react-router"
import Main from "./components/layout/Main"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

function App() {
    console.log()
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>

            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App