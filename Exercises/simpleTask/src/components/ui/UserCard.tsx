import type { UserProp } from "../../types/types"

const UserCard = (obj: UserProp) => {
    const { picture, name, email } = obj.user
    return (
        <div className="text-gray-300 bg-gray-400 w-fit px-4 py-6">
            <div className={`rounded-full overflow-hidden w-40 h-40 bg-[url(${picture.large})]`}>
                {/* <img src={picture.large} alt={`${name.title} ${name.first} ${name.title}`} className="w-full" /> */}
            </div>
            <section>
                <h1 className="font-bold text-xl">{name.title} {name.first} {name.title}</h1>
                <h1 className="tex">{email}</h1>
            </section>
        </div>
    )
}

export default UserCard