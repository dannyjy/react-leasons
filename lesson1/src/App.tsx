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
    <div className="bg-[#282D35] h-screen">
      <nav className="flex items-center gap-2 bg-[#21222A] px-12 py-8">
        <img src={reactLogo} alt="" className="" />
        <h1 className="text-xl text-[#61DAFB]">ReactFacts</h1>
      </nav>
      <main className="text-gray-300 pl-30 my-30 bg-[url('./assets/Group.png')] bg-right bg-contain bg-no-repeat" >
        <h1 className="text-5xl pb-10 font-bold">Fun Facts About React</h1>
        <ul className="text-2xl space-y-2.5 list-disc pl-8 marker:text-blue-400">
          {
            Facts.map((fact: string, index: number) => {
              return <li key={index} className="flex gap-4 items-center marker:*:text-blue-500">{fact}</li>
            })
          }
        </ul>
      </main>
    </div>
  )
}

export default App