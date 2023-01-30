import { useState } from 'react'
import Letter from './Letter' 


function Word() {
    return (
      //center all of the letters in tailwind
      <div className="flex justify-center">
        <Letter />
        <Letter />
        <Letter />


      </div>
      )
    }
    
export default Word