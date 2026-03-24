import { type PodElementType } from "../types/types"

const Pod = ({handlePodOn,id,color,on}:PodElementType) => {
    return (
        <button 
            onClick={() => handlePodOn(id)} 
            style={{backgroundColor: color}} 
            className={`rounded-md h-50 w-50 cursor-pointer ${on ? "opacity-100" : "opacity-20"}`}
        >
            {color}
        </button>
    )
}

export default Pod