function GameMode({ category, setCategory, difficulty, setDifficulty }) {
    console.log(difficulty)
  return (
    <div className="bg-amber-600 w-[200px] h-[300px] absolute m-10 mt-12 rounded-2xl p-2 space-y-3 ">
      <h1 className="text-2xl font-bold">Modo de jogo</h1>

      <div className="bg-amber-700 w-[184px] h-[240px] space-y-3 rounded-2xl ">
        <p>Selecione o quiz:</p>
        <select
          name="quizCategory"
          className="bg-white w-[90%] rounded-2xl "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="Portugues">Português</option>
          <option value="Ingles">Inglês</option>
          <option value="Historia">História</option>
          <option value="Geografia">Geografia</option>
        </select>

        <p>Selecione a dificuldade:</p>
        <select name="difficultyChange" 
        className="bg-white w-[90%] rounded-2xl "
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        >
            <option value={false}>Normal</option>
            <option value={true}>Difícil</option>
        </select>
      </div>
    </div>
  );
}

export default GameMode;
