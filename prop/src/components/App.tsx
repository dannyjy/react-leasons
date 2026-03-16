import Header from "./Header"
import Jokes from "./UI/Jokes"

const App = () => {
  return (
    <>
      <Header/>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 px-8">
        <Jokes setup="I got my daughter a fridge for her birthday" punchline="I can't wait to see her face light up when she opens it" />
        <Jokes setup="How did the hacker escape the police?" punchline="He just ransomware" />
        <Jokes setup="Why don't pirates travel on mountain roads?" punchline="Scurvy" />
        <Jokes setup="Why do bees stay in the hive in the winter?" punchline="Swarm" />
        <Jokes setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!" />
      </section>
    </>
  )
}

export default App