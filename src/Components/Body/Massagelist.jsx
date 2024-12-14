import React, { useEffect, useState } from 'react'
import Chat from './Chat'
import authService from '../../appwrite/auth'
import config from '../../appwrite/Config'

function MassageList() {
    const [isuser, setIsuser] = useState("")
    const [error, setError] = useState(null)
    const [userdata, setUserdata] = useState([])
    const [textuser, setTextuser] = useState('')

    // console.log(userStatus)

    const handelonclick = async(e) => {
        e.preventDefault()
        try {
            const file = await config.createPost({text:textuser, userid:userdata.$id, username:userdata.name})
            setTextuser('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        async function getCurrentUser(){
            try{
                const getuser = await authService.getCurrentUser()
                if(getuser){
                    // console.log(getuser)
                    setIsuser(true)
                    setUserdata(getuser)
                }
            }catch(error){
                // console.log(error)
                setIsuser(false)
                setError(error)

            }
        }

        getCurrentUser()
        console.log(userdata)

    },[])

  return (
    <div className="w-full h-full items-center flex justify-center">
        <div className='w-3/5 bg-gray-800 rounded-md h-[95%] overflow-hidden relative'>
            <div className="w-full h-full">
                    <h3 className='p-2 text-white text-2xl underline'>Open Chat</h3>
                    <div className="w-full h-[85%]">
                            <Chat userid={userdata.name}/>
                    </div>
                    <div className={`absolute bottom-5 w-full h-10 ${isuser? "hidden" : "flex"} text-center text-white items-center justify-center`}>Please Login or Registor Account To Chat</div>
                    <div className={`absolute bottom-5 w-full h-10 ${isuser ? "flex" : "hidden"}`}>
                        <form className='flex w-full h-full gap-2 items-center justify-center' onSubmit={handelonclick}>
                            <input type="text" className='w-5/6 rounded-md p-2 ml-2 outline-none text-black' placeholder="Type Your Massage"  onChange={(e)=> setTextuser(e.target.value)}  value={textuser}/>
                            <button type='submit' className='hover:bg-green-600 w-[2.9vw] h-[2.9vw] bg-green-400 rounded-full text-3xl items-center justify-center flex'>{">"}</button>
                        </form>
                    </div>
            </div>
        </div>
    </div>  )
}

export default MassageList