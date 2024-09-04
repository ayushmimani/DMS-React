import React, { useState } from 'react'
import ShowUser from './ShowUser'
import Form  from './Form'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  // if null show suser list, 
  const [ishowform,setishowform]=useState(-1)
  return (
    <>
      {ishowform===-1 && <Link><button className='bg-blue-400 p-2 m-3' onClick={()=>setishowform(0)}>Add user</button></Link>}
         {/* show user list  */}
       {ishowform===-1 && <ShowUser setuser={setishowform}/>}
         {/* add user  */}
       {ishowform===0 && <Form setuser={ishowform} setshownform={setishowform}/>}
          {/* edit user */}
       {ishowform>0&& <Form setuser={ishowform} setshownform={setishowform}/>}

        
    </>
  )
}

export default MainContainer