import type { PostCardProp } from "../../types/types"

const Post = ({ id, userId, title, body, onViewPost, onUserPosts }: PostCardProp ) => {
  return (
    <div>
      <img src="https://m.media-amazon.com/images/I/61rKeg3aOmL._AC_SL1000_.jpg" alt="photo"  className="w-fit rounded-sm"/>
      <section className="py-2 space-y-3">
        <main>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm">{body}</p>
        </main>
        <section className="flex gap-4 text-gray-200">
          <button onClick={() => onViewPost(id)} className="bg-zinc-900 rounded-2xl px-4 py-2 cursor-pointer">View more</button>
          <button onClick={() => onUserPosts(userId)} className="bg-zinc-900 rounded-2xl px-4 py-2 cursor-pointer">All Posts</button>
        </section>
      </section>
    </div>
  )
}

export default Post