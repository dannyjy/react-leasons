
interface Joke {
    setup: string
    punchline: string
}

const Jokes = ({setup, punchline}: Joke) => {
  return (
    <div className="bg-white px-4 py-6 rounded-xl shadow-lg">
        {setup && <h1 className="font-bold">{setup}</h1>}
        <p>{punchline}</p>
    </div>
  )
}

export default Jokes