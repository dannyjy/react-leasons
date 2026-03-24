import { type ClearTaskType } from "../types/types"

const ClearTask = ({handleClear}: ClearTaskType) => {
  return (
    <button onClick={handleClear} className="bg-black my-8 px-6 py-2 min-w-120 text-white rounded-xl cursor-pointer">Clear All Task</button>
  )
}

export default ClearTask