import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

function Users({name}) 
{
  const {userId} = useParams()
  const [data,setData] = useState([])
  useEffect(()=>{
  fetch(`https://api.github.com/users/${userId}`)
  .then((res)=>res.json())
  .then(data=>setData(data))
  console.log(data)
 },[])
  return (
    <div className='bg-gray-400 min-h-[400px]'>
     <div className='text-center  m-4  text-white p-4 text-3xl'>Github followers: {data.followers}</div>
    <div className="flex items-center justify-center ">
    <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
    </div>
  )
}

export default Users