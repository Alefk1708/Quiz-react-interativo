import { useEffect } from "react";

function QuizScreen({currentQuestion, selectedOption, setSelectedOption, handleConfirm, difficulty, conterInit, time}) {

  useEffect(() => {
    if (conterInit) {
      conterInit()
    }
  }, [ currentQuestion])


    return (
        <div>
        <div className="h-[260px] ">
            
        <h1 className="text-[1.7rem] font-medium pb-5">{currentQuestion.question}</h1>
        <ul className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <li key={index}>
              <p className="font-medium text-[1.13rem] text-left ">
                <input 
                type="radio"
                name="option"
                checked={selectedOption === index}
                onChange={() => setSelectedOption(index)}
               />{option}</p>
            </li>
          ))}
        </ul>
        </div>
        {difficulty ?
         <button 
        className="bg-white font-bold text-[17px] p-2 rounded-md w-[30%] ml-auto mr-auto mt-7"
        
        >{time}s</button>
        :
         <button 
        disabled={difficulty}
        className="bg-white font-bold p-2 rounded-md w-[30%] ml-auto mr-auto cursor-pointer mt-7 hover:bg-blue-200"
        onClick={handleConfirm}
        >Confirmar</button>
        }
      </div>
    )
}

export default QuizScreen;