import type { HelloProp } from "../../types/types"

const Hello = ({name}: HelloProp) => {
  return (
    <div className="bg-purple-950 text-white text-center py-4 text-xl">Hello, {name}</div>
  )
}

export default Hello