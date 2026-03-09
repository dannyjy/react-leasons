import reactLogo from "./assets/react.svg"

const Facts: string[] = [
  "Was first released in 2013",
  "Was originally created by Jordan Walke",
  "Has well over 200K stars on GitHub",
  "Is maintained by Meta",
  "Powers thousands of enterprise apps, including mobile apps"
]

const App = () => {
  return (
    <div>
      <nav className="flex items-center gap-2 bg-[#21222A] px-12 py-8">
        <img src={reactLogo} alt="" className="w-10 h-10" />
        <h1 className="text-xl text-[#61DAFB]">ReactFacts</h1>
      </nav>
      <main className="bg-[#282D35] h-[89vh] flex justify-center pt-28 bg-[url('./assets/Group.png')] bg-right bg-contain bg-no-repeat" >
        <ul className="text-gray-300 text-3xl space-y-2.5 max-md:px-4 max-sm:text-lg">
          {
            Facts.map((fact: string, index: number) => {
              return (
              <li key={index} className="flex gap-4 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <h1>{fact}</h1>
              </li>)
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default App