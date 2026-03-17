import TravelData from '../data/data'
import TravelCard from '../ui/TravelCard'

const Main = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(800px,1fr))] gap-4 pt-4">
        {TravelData.map((data) => <TravelCard key={data.id} {...data} />)}
    </div>
  )
}

// While passing to much props an easy way is to destructure the object got from the array which makes the whole props
// more shorter and readable

export default Main