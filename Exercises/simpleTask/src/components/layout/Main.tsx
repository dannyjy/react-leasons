import AlterButton from "../ui/AlertButton"
import Hello from "../ui/Hello"
import Counter from "./Counter"
import List from "./List"
import MultipleAlerts from "./MultipleAlerts"
import GreetMe from './GreetMe';
import RenderJson from "./RenderJson"
import GetRandomUsers from "./GetRandomUsers"

const Main = () => {
  return (
    <div className="space-y-4 text-white">
        <Hello name="John Doe"/>
        <AlterButton id={1} text="Click me"/>
        <MultipleAlerts />
        <Counter />
        <List />
        <GreetMe />
        <RenderJson />
        <GetRandomUsers />
    </div>
  )
}

export default Main