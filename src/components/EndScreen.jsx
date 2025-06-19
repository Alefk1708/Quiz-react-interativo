function EndScreen({score, setScore, setSelectedOption, setCurrentQuestionIndex, setShowScore, minimumRequired, quizData}) {
    return (
        <div>
          <h1 className="text-5xl font-medium mt-10">Quiz finalizado!</h1>
          <p className="font-medium text-[23px] m-3">Sua pontuação foi {score} de {quizData.length}</p>
          <p className="font-medium">{score >= minimumRequired ? "Parabens":"Mais sorte na proxima"}</p> 
          <button 
          className="bg-white p-2 font-bold rounded-md w-[30%] ml-auto mr-auto cursor-pointer mt-7 hover:bg-blue-200"
          onClick={() => {
            setShowScore(false)
            setCurrentQuestionIndex(0)
            setSelectedOption(null)
            setScore(0)
          }}
          >Jogar novamente</button>
        </div>
    )
}

export default EndScreen;