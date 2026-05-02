import { ListData } from "../../data/data"

const List = () => {
  return (
    <div className="bg-purple-950 flex justify-center items-center py-4">
        <ol className="list-decimal flex gap-8">
            {ListData.map((data, i) => <li key={i}>{data}</li>)}
        </ol>
    </div>
  )
}

export default List