// import React from 'react'
import { useState } from 'react'
import Cart from './components/Cart'
import Counter from './components/Counter'
import InfiniteLoop from './components/InfiniteLoop'
import { Logger } from './components/Logger'
import Search from './components/Search'
import WindowSize from './components/WindowSize'
import Batching from './components/Batching'
import Dashboard from './components/Dashboard'
import Post from './components/Post'
import FilteredList from './components/FilteredList'
import { lists } from './data/data'

const App = () => {
  const [items] = useState([{price: 500},{price: 500}]);

  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <Counter />
      <Logger />
      <InfiniteLoop />
      <Cart items={items}/>
      <Search query='food'/>
      <WindowSize />
      <Batching />
      <Dashboard postId='1' />
      <Post postId='6' />
      <FilteredList items={lists} query='mango'/>
    </div>
  )
}

export default App