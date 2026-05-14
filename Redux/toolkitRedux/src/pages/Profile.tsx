import { useSelector } from "react-redux"
import Login from "../components/Login"
import type { RootState } from "../features/store"
import ChangeColor from "../components/ChangeColor"

const Profile = () => {
  const user = useSelector((state: RootState) => state.user)
  const theme = useSelector((state: RootState) => state.theme)
  console.log(theme.color)

  const colorChange = {
    color: theme.color
  }
  
  return (
    <div className='h-screen flex justify-center items-center'>
        <section className="space-y-4">
            <div style={colorChange}>
              <h1 className="text-3xl font-medium">Profile Page</h1>
              <ul className="text-xl">
                  <li>Name: <span>{user.name}</span></li>
                  <li>Age: <span></span>{user.age <= 0 ? "" : user.age}</li>
                  <li>Email: <span></span>{user.email}</li>
              </ul>
            </div>
            <Login />
            <ChangeColor />
        </section>
    </div>
  )
}

export default Profile