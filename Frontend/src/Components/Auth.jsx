import React from 'react'
import Signup from './Signup';
import Login from './Login';
import { useState } from 'react';

const Auth = () => {

  const [flipped , setFlipped] = useState(false);

  return (
    <div className={`h-screen w-full bg-black flex justify-center items-center`}>
      {flipped ? (<Signup flipped={flipped} setFlipped={setFlipped} /> ) : (<Login flipped={flipped} setFlipped={setFlipped}/>)}
    </div>
  )
}

export default Auth