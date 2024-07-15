import React from 'react'
import { useParams } from 'react-router-dom'



function User() {

    const {userid}= useParams()
  return (
    <div className='text-3xl text-cyan-400 bg-black h-24 text-center pt-7 font-bold'>User : {userid}</div>
  )
}

export default User