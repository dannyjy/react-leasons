

type Prop = { prop: string}

function Footer({prop}: Prop){
  return (
    <footer className={`bg-gray-900 p-4 ${prop}`}>
      <small>©️ 2026 Ziroll Development</small>
    </footer>
  )
}

export default Footer