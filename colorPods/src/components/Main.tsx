import { useState } from "react"
import podData from '../data/podData'
import Pod from '../ui/Pod'
import type { PodType } from "../types/types"

const Main = () => {
    const [pads,setPads] = useState<PodType[]>(podData)

    function toggle(id: number){
        setPads(prevPod => prevPod.map((item) => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    function turnAllOff(){
        setPads(prevPod => prevPod.map((item) => {
            return { ...item, on: false }
        }))
    }

    function turnAllOn() {
        setPads(prevPod => prevPod.map((item) => {
            return { ...item, on: true }
        }))
    }
    
    const Pods = pads.map((pod) => <Pod key={pod.id} id={pod.id} handlePodOn={toggle} color={pod.color} on={pod.on}/>);

    return (
        <div className='flex flex-col gap-4 items-center justify-center h-screen'>
            <div className='grid grid-cols-[repeat(4,minmax(200px,1fr))] gap-3'>
                {Pods}
            </div>
            <div className=" flex gap-2">
                <button onClick={turnAllOff} className="bg-white p-3 rounded-md ">Turn All Off</button>
                <button onClick={turnAllOn} className="bg-white p-3 rounded-md ">Turn All On</button>
            </div>
        </div>
    )
}

export default Main