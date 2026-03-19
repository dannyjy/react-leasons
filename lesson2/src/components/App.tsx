import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
  return (
    <div className="grid grid-rows-12">
      <Header prop="row-span-1" />
      <MainContent prop="row-span-10"/>
      <Footer prop="row-span-1 text-gray-200" />
    </div>
  )
}

export default App