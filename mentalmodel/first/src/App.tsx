// import React from 'react'
import { useState } from 'react'
import Cart from './components/Cart'
import Counter from './components/Counter'
import InfiniteLoop from './components/InfiniteLoop'
import { Logger } from './components/Logger'

const App = () => {
  const [items,setTimes] = useState([{price: 500},{price: 500}]);

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <Counter />
      <Logger />
      <InfiniteLoop />
      <Cart items={items}/>
    </div>
  )
}

export default App