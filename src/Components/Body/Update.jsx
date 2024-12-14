import React, { useEffect, useState } from 'react'

function Update({UserOnline}) {
    const [users, setUsers] = useState([])
    const updatedData ="fjdlskf"

    useEffect(()=>{
        console.log(UserOnline)
        console.log(users)
        if(UserOnline){
            console.log("ture")
            const onlineUsers = UserOnline.filter((user)=> user.online === "online")
            setUsers(onlineUsers)
            console.log(users)
        }

    },[UserOnline])

  return (
  <>
    <span className='bg-gray-600 px-5 py-2 rounded-md'>Total User: {UserOnline?.length}</span>
    <span className='bg-gray-600 px-5 py-2 rounded-md'>User Online: {users?.length}</span>
    </>
  )
}

export default Update