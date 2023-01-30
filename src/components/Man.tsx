import { useState, useEffect } from 'react'



const Man = (props) => {


  const drawMan = deathCounter: any => {

    return (
      <div className="flex justify-center items-center ">
        <div className="relative w-32 h-64">
          
          {deathCounter == 1? <div className="w-16 h-16 rounded-full bg-white absolute top-0 left-8"></div> : <div className="w-16 h-16 rounded-full bg-white absolute top-0 left-8 hidden"></div> }
  
          {deathCounter == 2? <div className="w-1 h-36 bg-white absolute top-4 left-16"></div> : <div className="w-1 h-36 bg-white absolute top-4 left-16 hidden"></div>}
  
          <div className="w-1 h-36 bg-white absolute top-4 left-16"></div>
          
          
          <div className="w-1 h-16 rotate-45	 bg-white absolute bottom-40 left-24"></div>
          <div className="w-1 h-16 -rotate-45 bg-white absolute bottom-40 right-24"></div>
  
          <div className="w-1 h-16 -rotate-45	bg-white absolute bottom-20 left-20"></div>
          <div className="w-1 h-16 rotate-45 bg-white absolute bottom-20 right-20"></div>
        </div>
      </div>
    );

  };


};
    
export default Man