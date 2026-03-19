import reactLogo from "../assets/react.svg"

type Prop = { prop: string }

function Header({prop}: Prop) {
  return (
    <header className={`bg-gray-900 px-10 py-5 flex items-center justify-between gap-4 ${prop} text-gray-200`}>
      <img src={reactLogo} alt="React Logo" className=""/>
      <ul className="flex items-center gap-8 text-lg">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Header