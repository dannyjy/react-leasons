import type { JokesProp } from '../../types/types'

const JokeCard = ({setup, punchline}: JokesProp) => {
  return (
    <div className='text-center bg-gray-100 text-gray-800 rounded-2xl p-10'>
        <h1 className='text-3xl font-bold'>{setup}</h1>
        <h1 className='text-lg'>{punchline}</h1>
    </div>
  )
}

export default JokeCard