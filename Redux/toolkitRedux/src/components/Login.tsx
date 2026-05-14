import { useDispatch } from 'react-redux'
import Button from './ui/Button'
import type { AppDispatch } from '../features/store'
import { login, logout } from '../features/userSlice'

const Login = () => {
    const dispatch = useDispatch<AppDispatch>()

    const userLogin = () => dispatch(login({name: "Daniel", age: 45, email: "danieljohn9295@gmail.com"}))
    const userLogout = () => dispatch(logout())

    return (
        <div className='flex gap-4'>
            <Button onButtonClick={userLogin} text='Login' style=''/>
            <Button onButtonClick={userLogout} text='Logout' style=''/>
        </div>
    )
}

export default Login