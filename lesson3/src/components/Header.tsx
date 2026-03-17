import globalImg from '../assets/global.png'

const Header = () => {
  return (
    <nav className="flex justify-center items-center py-2 bg-[#F55a5a] gap-1 text-white">
        <img src={globalImg} alt="Global Image" className='w-5 h-5'/>
        <h1>my travel journal.</h1>
    </nav>
  )
}

export default Header