import Cards from "./Cards"
import Cart from "./Cart"

const Home = () => {
  return (
    <div className="grid lg:grid-cols-7">
      <Cards style={"lg:col-span-5"} />
      <Cart style={"lg:col-span-2"}/>
    </div>
  )
}

export default Home