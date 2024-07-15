import React ,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Dashboard() {
    const {user} =useContext(UserContext)
    if (!user) return <div className='text-white bg-black flex justify-center items-center h-24 font-bold text-3xl'>Please Login</div>

    return <div className='text-white bg-black flex justify-center items-center h-24 font-bold text-3xl'>Welcome {user.username} , {user.password}</div>
}

export default Dashboard