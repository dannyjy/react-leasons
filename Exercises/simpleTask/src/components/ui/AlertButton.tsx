import type { AlterBtnProp } from "../../types/types"

const AlertButton = ({text}: AlterBtnProp) => {
    function handleClick(){
        alert(`You clicked on ${text}`)
    }
  return (
    <div className="text-center py-4">
        <button onClick={handleClick} className="bg-gray-900 px-4 py-2 rounded">{text}</button>
    </div>
  )
}

export default AlertButton