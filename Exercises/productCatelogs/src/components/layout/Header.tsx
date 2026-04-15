import { useContext } from "react"
import { CartCountContext } from './../../context/context';

const Header = () => {
  const cart = useContext(CartCountContext)
  return (
    <header className="border-b text-gray-300 border-white/10 py-8 px-12 flex justify-between items-end sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="flex flex-col gap-1 ">
            <div className="text-[14px] font-bold tracking-[0.3em] uppercase">Aural Architecture / 01</div>
            <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Studio Catalog</div>
        </div>
      <h1 className="uppercase flex items-center gap-2">Total Items <span className="w-4 h-2 p-4 rounded-full flex justify-center items-center bg-zinc-600">{cart?.submittedCart.length}</span></h1>
    </header>
  )
}

export default Header