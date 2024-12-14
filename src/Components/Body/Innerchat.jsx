import React, { useEffect, useState } from 'react'
import authService from '../../appwrite/auth'

function Innerchat({
  user,
  massages="this is a massage",
  userid
}) {
    // const [currentUser, setCurrentuser] = useState("")


    useState(()=>{
      
    },[])


  return (
    <li className={`${user==userid ? "justify-end":"justify-start"} flex text-white w-full h-max`}>
        <div className={` grid grid-cols-1 items-center w-max`}>
            <span className='text-[14px]'>{user}</span>
            <span className='py-2 px-3 w-max h-max bg-gray-700 rounded-md'>{massages}</span>
        </div>
    </li>
  )
}

export default Innerchat