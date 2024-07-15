import React , {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function CreateAccount() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {setUser}  = useContext(UserContext)

    const handle = (e)=>{
        e.preventDefault()
        setUser({username , password})
    }

  return (
    <div className='flex justify-center items-center flex-col bg-black text-white' >
         <h2 className='text-2xl flex justify-center items-center'>LOGIN</h2>
        <input className='text-black rounded m-3 p-1' type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='username' />
        <input className='text-black rounded m-3 p-1' type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' />
        <button className='p-2 bg-orange-400 rounded-xl mb-5 text-black ' onClick={handle}>Submit</button>
    </div>
  )
}

export default CreateAccount;