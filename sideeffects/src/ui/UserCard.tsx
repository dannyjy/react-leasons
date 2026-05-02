import type { UserProp } from "../types/types"

const UserCard = ({ imageUrl, Name, Email, Country }: UserProp) => {
  return (
    <div className="h-96">
        <div className="h-60 overflow-hidden rounded-xl">
        <img
            src={imageUrl}
            alt={Name}
            className="h-full w-full object-cover object-center"
        />
        </div>
        <section>
            <h1 className="font-semibold text-xl">{Name}</h1>
            <h3>Email: {Email}</h3>
            <h3>Country: {Country}</h3>
        </section>
    </div>
  )
}

export default UserCard