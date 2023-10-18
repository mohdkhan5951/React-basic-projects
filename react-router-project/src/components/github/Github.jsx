import React, { useEffect, useState ,useRef} from 'react'
import { useLoaderData,Link } from 'react-router-dom'
import Users from '../users/Users';


function Github() 
{

 const [username,setUsername] = useState("");
  return (
    <div className=' min-h-[300px] flex justify-center items-center flex-col pt-2 bg-gray-200'>
      <div>Enter Your Github Username</div>
      <div> <input onChange={(e)=>setUsername(e.target.value)} type="text" value={username} placeholder="Username" className='my-4 w-60 p-2  py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500'/></div>
      <button className='bg-gray-800 outline-none rounded-xl w-60 my-2 p-2 text-white'
      >
         <Link to={`users/${username}`} >Enter</Link> 
      </button>
    </div>
  )
}

export default Github

