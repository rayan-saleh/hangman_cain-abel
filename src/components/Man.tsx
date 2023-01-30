


const Man = ({numberOfGuesses}: any) => {


    return (
      <div className="flex justify-center items-center ">
        <div className="relative w-32 h-64">

        {numberOfGuesses >= 1 && <div className="w-16 h-16 rounded-full bg-white absolute top-0 left-8"></div>} 
        {numberOfGuesses >= 2 && <div className="w-1 h-36 bg-white absolute top-4 left-16"></div> } 
        {numberOfGuesses >= 3 && <div className="w-1 h-16 rotate-45	 bg-white absolute bottom-40 left-24"></div>} 
        {numberOfGuesses >= 4 && <div className="w-1 h-16 -rotate-45 bg-white absolute bottom-40 right-24"></div>} 
        {numberOfGuesses >= 5 && <div className="w-1 h-16 -rotate-45	bg-white absolute bottom-20 left-20"></div>} 
        {numberOfGuesses >= 6 && <div className="w-1 h-16 rotate-45 bg-white absolute bottom-20 right-20"></div>}

        </div>
      </div>
    );

  };


// };
    
export default Man