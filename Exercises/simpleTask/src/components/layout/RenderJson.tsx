import JokeCard from "../ui/JokeCard"
import { JokesData } from "../../data/data"

const RenderJson = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,500px))] justify-center gap-4">
        {JokesData.map((joke) => <JokeCard key={joke.id} {...joke} />)}
    </div>
  )
}

export default RenderJson