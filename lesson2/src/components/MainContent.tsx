

type Prop = { prop: string }

const Facts: string[] = [
  "Was first released in 2013",
  "Was originally created by Jordan Walke",
  "Has well over 200K stars on GitHub",
  "Is maintained by Meta",
  "Powers thousands of enterprise apps, including mobile apps"
]


const MainContent = ({prop}: Prop) => {
  return (
      <main className={`bg-gray-800 row-span-10 ${prop}`}>
            <h1>Fun Facts about React</h1>
            <ul className="text-gray-200">
                {
                    Facts.map((fact, index) => <li key={index}>{fact}</li>)
                }
            </ul>
      </main>
  )
}

export default MainContent