function HomeScreen({setStart, loading, quizData, conterInit}) {
    return (
        <div className="bg-amber-600 w-[800px] rounded-2xl ml-auto mr-auto h-[300px] p-8 mt-12 ">
        <h1 className="text-4xl font-medium">Bem vindo ao quiz interativo em react</h1>
        <p className="text-2xl font-medium">Vamos começar ?</p>
        <button
        className={`bg-white w-[10rem] h-[3rem] text-2xl font-bold rounded-md mt-20 cursor-pointer ${loading ? "": "hover:bg-blue-300"}`}
        onClick={() => {
          setStart(true)
          conterInit()
        }}
        >{quizData.length < 1  ? "Carregando...": "Começar"}</button>
      </div>
    )
}

export default HomeScreen;