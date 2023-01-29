import { useState } from 'react'


function Keys({letter}: {letter: string}) {
    return (
        <div className="card px-2 py-1.5 text-xs">
        <button >
            {letter}
        </button>

        </div>
      )
    }
    
export default Keys