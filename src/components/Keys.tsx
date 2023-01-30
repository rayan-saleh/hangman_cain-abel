import { useState } from 'react'


function Keys({letter, onClickButton}: {letter: string, onClickButton: any}) {
    return (
        <div className="card px-2 py-1.5 text-xs">
        <button onClick = {onClickButton}>
            {letter}
        </button>

        </div>
      )
    }
    
export default Keys