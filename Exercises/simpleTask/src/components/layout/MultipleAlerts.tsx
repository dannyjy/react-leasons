import { AlertButtonData } from "../../data/data"
import AlertButton from "../ui/AlertButton"

const MultipleAlerts = () => {
  return (
    <section className=" bg-green-950" >
        <ul className="flex items-center justify-center gap-4">
            {AlertButtonData.map((data) => <AlertButton key={data.id} {...data} />)}
        </ul>
    </section>
  )
}

export default MultipleAlerts