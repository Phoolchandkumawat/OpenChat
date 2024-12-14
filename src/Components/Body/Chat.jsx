import React, { useEffect, useState } from 'react'
import Innerchat from './Innerchat'
import config from '../../appwrite/Config'

function Chat({userid}) {
  const [files, setFiles] = useState(null)

  async function getdata(){
    try {
      const data = await config.getfiles()
      setFiles(data.documents)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    
    getdata()
  }, [])
  return (
    <>
        <div className="w-full h-full border-t-2 border-[#6f6d6d]">
            <ul className='text-white grid grid-cols-1 gap-5 mt-5 p-2'>
                
                {
                  files?.length> 0 ? files.map((file, index) => (
                    <Innerchat user={file.username} key={file.$createdAt+index} massages={file.text} userid={userid}/>
                  )) : (<p className='text-[17px] text-center'>Be The Firts One To Send A Massage</p>)
                }
                
            </ul>
        </div>
    </>
  )
}

export default Chat