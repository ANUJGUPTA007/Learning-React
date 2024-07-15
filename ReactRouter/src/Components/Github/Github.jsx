import React, { useCallback } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData() 
    
    // const [data,setData]=useCallback([])

    // useCallback(()=>{
    //     fetch('https://api.github.com/users/ANUJGUPTA007')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <>
    <div className='flex flex-col justify-center items-center bg-black '>
    <div className=' m-5 h-24 text-3xl font-bold text-yellow-400 bg-stone-900 text-center p-7'>Github Followers : {data.followers} </div>
    <div className='bg-black p-5'><img className='rounded-full' src={data.avatar_url} width={300} alt="gitimage" /></div>
    </div>
    </>
  )
}

export default Github

export const githubInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/ANUJGUPTA007')
    return response.json()
}