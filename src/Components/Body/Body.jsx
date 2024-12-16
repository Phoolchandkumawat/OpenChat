import React, { useEffect, useState } from 'react'
import MassageList from './Massagelist'
import {useNavigate} from 'react-router-dom'
import authService from '../../appwrite/auth'
import config from '../../appwrite/Config'
import Update from './Update'

function Body() {
  const navigate = useNavigate()
  const [user, setUser] = useState(false)
  const [userdata, setUserdata] = useState([])
  const [isonline, setisonline] = useState('')
  const [allonline, setAllonline] = useState([])
  const userlogout  = async()=>{
    try {
      const userlogoutdata = await config.updatePost({documentid: userdata.$id, newtext: "offline"})
      const userlogout = await authService.logout()
      setisonline("offline")
      isonline("offline")
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    async function getCurrentUser(){
      try{
          const getuser = await authService.getCurrentUser()
    
          if(getuser){
            setUser(true)
            setUserdata(getuser)    
          }
      }catch(error){
          setUser(false)
      }
  }


  async function getOnline(){
    try {
      const getonlinedata = await config.getOnlinefiles();
      setAllonline(getonlinedata)
    } catch (error) {
      
    }
  }
  
  getOnline()
    getCurrentUser()
  },[isonline])
  
  
  return (
    <div className="w-full h-screen bg-black flex justify-between">
        <div className="w-1/4 bg-gray-700 h-full">
          <div className="text-white w-full h-full p-2">
            <h3 className='p-2'>Open Chat</h3>
            <div className="flex h-max w-full gap-3 ml-2">
              <Update UserOnline={allonline.documents}/>
              
            </div>
            <div className={`${user ? "flex": "hidden"} flex-col`}>
              <span className='px-2 py-5 w-max mt-5 rounded-md bg-gray-600'>Your're Logged In: {userdata.name}</span> 
              <button type='button' onClick={userlogout} className='bg-gray-600 px-5 rounded-md mt-5 hover:bg-red-500 w-max py-2'>Log Out</button>
              </div>
            <ul className={`mt-5 ml-2 grid-cols-1 gap-2 ${user ? "hidden" : "grid"}`}>
              <li className='p-2'>
                <button className='bg-gray-600 px-5 py-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={(e)=> {e.preventDefault(); navigate('/login')}}>Login</button>
              </li>
              <li className='p-2'>
                <button className='bg-gray-600 px-5 py-2 rounded-md cursor-pointer hover:bg-gray-500' onClick={(e)=> {e.preventDefault(); navigate('/signup')}}>Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[800px]">
            <MassageList/>
        </div>
        <div className="w-1/5">
          <h3 className='text-red-500'>Please Don't Leave Any Senstive Message <br /> It's A Open Chat Can Be Seen By Any One</h3>
        </div>
    </div>
  )
}

export default Body
