import { useEffect, useState } from "react";
import Header from "./components/Header";
import EndScreen from "./components/EndScreen";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import GameMode from "./components/GameMode";

function App() {
  const [quizData, setQuizData] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [start, setStart] = useState(false);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState(false);
  const [time, setTime] = useState(15);
  const [active, setActive] = useState(false);

  const ingles = [
    {
      question: "What is the plural form of 'mouse'?",
      options: ["mouses", "mice", "mouse", "meese"],
      correctIndex: 1,
    },
    {
      question: "What is the past tense of 'go'?",
      options: ["goed", "went", "gone", "goes"],
      correctIndex: 1,
    },
    {
      question: "Which word is the antonym of 'hot'?",
      options: ["cold", "warm", "boiling", "heated"],
      correctIndex: 0,
    },
    {
      question: "Which word is a synonym of 'quick'?",
      options: ["slow", "rapid", "late", "weak"],
      correctIndex: 1,
    },
    {
      question: "Fill in the blank: She is good ___ math.",
      options: ["in", "at", "on", "with"],
      correctIndex: 1,
    },
    {
      question: "Fill in the blank: I have lived here ___ 2010.",
      options: ["since", "for", "from", "by"],
      correctIndex: 0,
    },
    {
      question: "Choose the correct article: I saw ___ elephant at the zoo.",
      options: ["a", "an", "the", "no article"],
      correctIndex: 1,
    },
    {
      question: "What is the comparative form of 'big'?",
      options: ["bigger", "more big", "biggest", "most big"],
      correctIndex: 0,
    },
    {
      question: "What is the past participle of 'eat'?",
      options: ["eated", "ate", "eaten", "eat"],
      correctIndex: 2,
    },
    {
      question: "Which is a synonym of 'happy'?",
      options: ["sad", "joyful", "angry", "tired"],
      correctIndex: 1,
    },
    {
      question: "Which is the antonym of 'noisy'?",
      options: ["quiet", "loud", "bright", "dark"],
      correctIndex: 0,
    },
    {
      question: "Choose the correct pronoun: The book belongs to ___.",
      options: ["he", "him", "his", "they"],
      correctIndex: 1,
    },
    {
      question: "He ___ to the gym every day.",
      options: ["go", "goes", "went", "gone"],
      correctIndex: 1,
    },
    {
      question: "What is the past tense of 'sing'?",
      options: ["sang", "singed", "sung", "sings"],
      correctIndex: 0,
    },
    {
      question: "Which is a synonym of 'strange'?",
      options: ["odd", "ordinary", "common", "usual"],
      correctIndex: 0,
    },
    {
      question: "Which is the antonym of 'ancient'?",
      options: ["old", "modern", "historic", "antique"],
      correctIndex: 1,
    },
    {
      question: "Which word means 'kind and generous'?",
      options: ["malevolent", "benevolent", "hateful", "ignorant"],
      correctIndex: 1,
    },
    {
      question: "Fill in the blank: They have been friends ___ childhood.",
      options: ["since", "for", "from", "during"],
      correctIndex: 0,
    },
    {
      question: "Choose the correct form: She suggested that he ___ earlier.",
      options: ["arrive", "arrives", "arrived", "arriving"],
      correctIndex: 0,
    },
    {
      question: "What is the plural form of 'child'?",
      options: ["childs", "children", "childes", "child"],
      correctIndex: 1,
    },
    {
      question: "What is the opposite of 'difficult'?",
      options: ["easy", "hard", "tough", "complex"],
      correctIndex: 0,
    },
    {
      question: "Synonym of 'begin'?",
      options: ["start", "finish", "exit", "end"],
      correctIndex: 0,
    },
    {
      question: "Fill in the blank: I'll call you ___ I arrive.",
      options: ["when", "if", "unless", "because"],
      correctIndex: 0,
    },
    {
      question: "Choose the correct preposition: He apologized ___ being late.",
      options: ["with", "for", "about", "to"],
      correctIndex: 1,
    },
    {
      question: "What is the past participle of 'write'?",
      options: ["written", "wrote", "write", "writes"],
      correctIndex: 0,
    },
    {
      question: "Which sentence is correct?",
      options: [
        "I have visited London last year.",
        "I visited London last year.",
        "I have visit London last year.",
        "I visits London last year.",
      ],
      correctIndex: 1,
    },
    {
      question: "What is the synonym of 'difficult'?",
      options: ["challenging", "simple", "easy", "light"],
      correctIndex: 0,
    },
    {
      question: "Which is the antonym of 'rare'?",
      options: ["common", "unusual", "scarce", "unique"],
      correctIndex: 0,
    },
    {
      question: "Fill in the blank: She is looking forward ___ her vacation.",
      options: ["to", "on", "in", "for"],
      correctIndex: 0,
    },
    {
      question:
        "Choose the correct modal: You ___ smoke here; it's prohibited.",
      options: ["must", "can", "should", "mustn't"],
      correctIndex: 3,
    },
    {
      question: "Which is the comparative form of 'good'?",
      options: ["gooder", "better", "more good", "best"],
      correctIndex: 1,
    },
    {
      question: "What is the superlative form of 'happy'?",
      options: ["happiest", "more happy", "most happy", "happyest"],
      correctIndex: 0,
    },
    {
      question:
        "Fill in the blank: I would rather stay home ___ go out tonight.",
      options: ["than", "then", "that", "though"],
      correctIndex: 0,
    },
    {
      question: "What is the past tense of 'teach'?",
      options: ["teached", "taught", "teught", "teach"],
      correctIndex: 1,
    },
    {
      question: "Which is a synonym of 'tiny'?",
      options: ["huge", "small", "big", "large"],
      correctIndex: 1,
    },
    {
      question: "Which is the antonym of 'victory'?",
      options: ["win", "loss", "success", "triumph"],
      correctIndex: 1,
    },
    {
      question: "Choose the correct article: ___ Amazon is a large river.",
      options: ["A", "An", "The", "No article"],
      correctIndex: 2,
    },
    {
      question: "Fill in the blank: He insisted ___ paying for the meal.",
      options: ["in", "on", "at", "for"],
      correctIndex: 1,
    },
    {
      question:
        "Choose the correct form: If I ___ a million dollars, I would travel the world.",
      options: ["have", "had", "has", "having"],
      correctIndex: 1,
    },
    {
      question: "What is the plural form of 'analysis'?",
      options: ["analysises", "analyses", "analysis", "analysies"],
      correctIndex: 1,
    },
    {
      question: "Synonym of 'angry'?",
      options: ["furious", "happy", "calm", "joyful"],
      correctIndex: 0,
    },
    {
      question: "Antonym of 'include'?",
      options: ["exclude", "contain", "embrace", "involve"],
      correctIndex: 0,
    },
    {
      question: "Fill in the blank: I can't believe ___ happened.",
      options: ["what", "that", "which", "who"],
      correctIndex: 1,
    },
    {
      question: "Choose the correct tense: By next year, I ___ this book.",
      options: ["will finish", "will have finished", "finish", "am finishing"],
      correctIndex: 1,
    },
    {
      question: "What is the past participle of 'drive'?",
      options: ["drove", "driven", "drived", "drive"],
      correctIndex: 1,
    },
    {
      question: "Which is the comparative form of 'bad'?",
      options: ["badder", "worse", "more bad", "worst"],
      correctIndex: 1,
    },
    {
      question:
        "Fill in the blank: Neither he nor his friends ___ able to attend.",
      options: ["is", "are", "were", "be"],
      correctIndex: 1,
    },
    {
      question: "Synonym of 'brave'?",
      options: ["courageous", "scared", "timid", "afraid"],
      correctIndex: 0,
    },
    {
      question: "Antonym of 'transparent'?",
      options: ["opaque", "clear", "see-through", "visible"],
      correctIndex: 0,
    },
    {
      question:
        "Choose the correct plural: There are many ___ in the classroom.",
      options: ["child", "children", "childs", "childes"],
      correctIndex: 1,
    },
  ];

  const portugues = [
    {
      question: "Qual é o plural de 'cidadão'?",
      options: ["cidadões", "cidadãos", "cidadães", "cidões"],
      correctIndex: 1,
    },
    {
      question: "Qual a forma correta do particípio do verbo 'ver'?",
      options: ["visto", "vê", "vindo", "vi"],
      correctIndex: 0,
    },
    {
      question: "Qual é o antônimo de 'feliz'?",
      options: ["triste", "alegre", "contente", "divertido"],
      correctIndex: 0,
    },
    {
      question: "Qual é um sinônimo de 'rápido'?",
      options: ["lento", "vagaroso", "veloz", "devagar"],
      correctIndex: 2,
    },
    {
      question: "Complete: Ela gosta muito ___ estudar à noite.",
      options: ["de", "em", "por", "com"],
      correctIndex: 0,
    },
    {
      question:
        "Qual a forma correta: 'Houveram problemas' ou 'Houve problemas'?",
      options: [
        "Houveram problemas",
        "Houve problemas",
        "Foram havidos problemas",
        "Haveram problemas",
      ],
      correctIndex: 1,
    },
    {
      question: "Qual dessas frases está correta?",
      options: [
        "Fazem dois anos que estudo.",
        "Faz dois anos que estudo.",
        "Já fazem dias que chove.",
        "Já fizeram dois anos que estudo.",
      ],
      correctIndex: 1,
    },
    {
      question: "Qual é o comparativo de 'bom'?",
      options: ["mais bom", "melhor", "bom demais", "ótimo"],
      correctIndex: 1,
    },
    {
      question: "Qual a forma correta do passado do verbo 'pôr'?",
      options: ["pôs", "pude", "ponhou", "pusera"],
      correctIndex: 0,
    },
    {
      question: "Qual dessas palavras é antônimo de 'leve'?",
      options: ["suave", "leveza", "pesado", "brando"],
      correctIndex: 2,
    },
    {
      question: "Qual dessas palavras é sinônimo de 'corajoso'?",
      options: ["medroso", "valente", "covarde", "assustado"],
      correctIndex: 1,
    },
    {
      question: "Complete: Nós ___ felizes com o resultado.",
      options: ["foi", "fomos", "seram", "é"],
      correctIndex: 1,
    },
    {
      question: "Qual dessas opções é um advérbio de intensidade?",
      options: ["muito", "rápido", "casa", "ele"],
      correctIndex: 0,
    },
    {
      question: "Qual o plural de 'mão'?",
      options: ["mãos", "mãoses", "mãons", "maões"],
      correctIndex: 0,
    },
    {
      question: "Qual dessas frases está gramaticalmente correta?",
      options: [
        "Ela me viu ontem.",
        "Ela mim viu ontem.",
        "Ela vê eu ontem.",
        "Ela visto eu ontem.",
      ],
      correctIndex: 0,
    },
    {
      question: "Qual é o particípio do verbo 'fazer'?",
      options: ["feito", "fazido", "fazeu", "fizido"],
      correctIndex: 0,
    },
    {
      question: "Complete: Eu prefiro estudar ___ assistir TV.",
      options: ["que", "do que", "do quê", "de que"],
      correctIndex: 1,
    },
    {
      question:
        "Qual é a forma correta do verbo 'haver' no futuro do presente?",
      options: ["hão de haver", "haverá", "hão", "haverão"],
      correctIndex: 1,
    },
    {
      question: "Qual destas é uma preposição?",
      options: ["rápido", "com", "azul", "correr"],
      correctIndex: 1,
    },
    {
      question: "Qual é o antônimo de 'claro'?",
      options: ["branco", "brilho", "escuro", "luz"],
      correctIndex: 2,
    },
  ];

  const geografia = [
    {
      question: "Qual é a capital do Brasil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Belo Horizonte"],
      correctIndex: 2,
    },
    {
      question: "Qual o maior país em extensão territorial do mundo?",
      options: ["China", "Estados Unidos", "Canadá", "Rússia"],
      correctIndex: 3,
    },
    {
      question: "Qual é o rio mais extenso do mundo?",
      options: ["Rio Nilo", "Rio Amazonas", "Rio Mississipi", "Rio Yangtzé"],
      correctIndex: 1,
    },
    {
      question: "Quantos continentes existem na Terra?",
      options: ["5", "6", "7", "8"],
      correctIndex: 2,
    },
    {
      question: "O deserto do Saara está localizado em qual continente?",
      options: ["Ásia", "África", "América", "Europa"],
      correctIndex: 1,
    },
    {
      question: "Qual é o oceano que banha o litoral brasileiro?",
      options: ["Pacífico", "Glacial Ártico", "Atlântico", "Índico"],
      correctIndex: 2,
    },
    {
      question:
        "Qual bioma brasileiro é conhecido por sua biodiversidade e floresta densa?",
      options: ["Pantanal", "Caatinga", "Cerrado", "Amazônia"],
      correctIndex: 3,
    },
    {
      question: "Qual é a principal vegetação da região sul do Brasil?",
      options: ["Mata Atlântica", "Floresta Amazônica", "Campos", "Caatinga"],
      correctIndex: 2,
    },
    {
      question: "O que é o clima tropical?",
      options: [
        "Frio o ano inteiro",
        "Quente e seco",
        "Com duas estações bem definidas: seca e chuvosa",
        "Chuva o ano todo",
      ],
      correctIndex: 2,
    },
    {
      question: "Qual país tem a maior população do mundo?",
      options: ["Índia", "Estados Unidos", "Indonésia", "China"],
      correctIndex: 3,
    },
    {
      question: "Qual é o maior arquipélago do Brasil?",
      options: [
        "Fernando de Noronha",
        "Marajó",
        "Ilhabela",
        "Ilha de São Sebastião",
      ],
      correctIndex: 0,
    },
    {
      question:
        "Qual linha imaginária divide a Terra em hemisfério norte e sul?",
      options: [
        "Trópico de Capricórnio",
        "Linha do Equador",
        "Meridiano de Greenwich",
        "Trópico de Câncer",
      ],
      correctIndex: 1,
    },
    {
      question: "Qual é a capital do estado do Amazonas?",
      options: ["Belém", "Porto Velho", "Manaus", "Macapá"],
      correctIndex: 2,
    },
    {
      question:
        "Qual é a principal atividade econômica da região Centro-Oeste do Brasil?",
      options: ["Turismo", "Mineração", "Agropecuária", "Indústria pesada"],
      correctIndex: 2,
    },
    {
      question:
        "O Pantanal é um bioma localizado principalmente em quais estados?",
      options: [
        "Pará e Amazonas",
        "Mato Grosso e Mato Grosso do Sul",
        "Bahia e Goiás",
        "Minas Gerais e Tocantins",
      ],
      correctIndex: 1,
    },
    {
      question: "Qual é o ponto mais alto do Brasil?",
      options: [
        "Pico da Bandeira",
        "Pico das Agulhas Negras",
        "Monte Roraima",
        "Pico da Neblina",
      ],
      correctIndex: 3,
    },
    {
      question: "Qual é a capital do estado de Santa Catarina?",
      options: ["Joinville", "Florianópolis", "Blumenau", "Itajaí"],
      correctIndex: 1,
    },
    {
      question: "Qual país faz fronteira com o Brasil ao sul?",
      options: ["Peru", "Equador", "Argentina", "Colômbia"],
      correctIndex: 2,
    },
    {
      question:
        "Qual é o nome do movimento das placas tectônicas que formam terremotos?",
      options: ["Erosão", "Sedimentação", "Vulcanismo", "Tectonismo"],
      correctIndex: 3,
    },
    {
      question: "Qual é o maior lago da América do Sul?",
      options: [
        "Lago Paranoá",
        "Lago Titicaca",
        "Lagoa dos Patos",
        "Lago Maracaibo",
      ],
      correctIndex: 1,
    },
  ];

  const historia = [
    {
      question: "Em que ano o Brasil declarou sua independência de Portugal?",
      options: ["1808", "1822", "1889", "1763"],
      correctIndex: 1,
    },
    {
      question: "Quem foi o líder da independência do Brasil?",
      options: ["Dom Pedro I", "Getúlio Vargas", "Tiradentes", "Dom João VI"],
      correctIndex: 0,
    },
    {
      question: "Qual povo construiu as pirâmides do Egito?",
      options: ["Gregos", "Romanos", "Egípcios", "Persas"],
      correctIndex: 2,
    },
    {
      question: "O que foi a Revolução Francesa?",
      options: [
        "Conflito religioso entre católicos e protestantes",
        "Movimento que derrubou a monarquia na França",
        "Conquista da América pelos franceses",
        "Expansão colonial na África",
      ],
      correctIndex: 1,
    },
    {
      question: "Quem foi Tiradentes?",
      options: [
        "Imperador do Brasil",
        "Militar português",
        "Líder da Inconfidência Mineira",
        "Presidente da República",
      ],
      correctIndex: 2,
    },
    {
      question: "Em que ano foi proclamada a República no Brasil?",
      options: ["1889", "1822", "1930", "1964"],
      correctIndex: 0,
    },
    {
      question:
        "Qual era o principal produto explorado no ciclo econômico do açúcar no Brasil colonial?",
      options: ["Café", "Petróleo", "Cana-de-açúcar", "Ouro"],
      correctIndex: 2,
    },
    {
      question: "Qual desses períodos corresponde à Idade Média?",
      options: [
        "Século I ao III",
        "Século V ao XV",
        "Século XVII ao XIX",
        "Século XXI",
      ],
      correctIndex: 1,
    },
    {
      question: "Qual foi o país que colonizou o Brasil?",
      options: ["Espanha", "Inglaterra", "Portugal", "França"],
      correctIndex: 2,
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      options: [
        "Deodoro da Fonseca",
        "Getúlio Vargas",
        "Dom Pedro II",
        "Juscelino Kubitschek",
      ],
      correctIndex: 0,
    },
    {
      question: "O que foi a escravidão no Brasil?",
      options: [
        "Período de liberdade dos africanos",
        "Sistema de trabalho assalariado",
        "Exploração forçada de africanos e indígenas",
        "Regime militar",
      ],
      correctIndex: 2,
    },
    {
      question: "O que marcou o fim da Segunda Guerra Mundial?",
      options: [
        "Independência dos EUA",
        "Assassinato de Hitler",
        "Queda da bomba atômica no Japão",
        "Criação da ONU",
      ],
      correctIndex: 2,
    },
    {
      question:
        "Qual era o nome do navio que trouxe a família real portuguesa ao Brasil?",
      options: [
        "Nau Capitânia",
        "Frota Imperial",
        "Carlota Joaquina",
        "Medusa",
      ],
      correctIndex: 0,
    },
    {
      question: "Quem foi Napoleão Bonaparte?",
      options: [
        "Imperador francês",
        "Rei da Inglaterra",
        "Papa do Vaticano",
        "Presidente dos EUA",
      ],
      correctIndex: 0,
    },
    {
      question: "A Primeira Guerra Mundial ocorreu entre quais anos?",
      options: ["1914 a 1918", "1939 a 1945", "1800 a 1815", "1900 a 1905"],
      correctIndex: 0,
    },
    {
      question: "Qual documento pôs fim oficialmente à escravidão no Brasil?",
      options: [
        "Lei do Ventre Livre",
        "Lei dos Sexagenários",
        "Lei Áurea",
        "Constituição de 1824",
      ],
      correctIndex: 2,
    },
    {
      question: "Quem assinou a Lei Áurea?",
      options: [
        "Dom Pedro II",
        "Marechal Deodoro",
        "Getúlio Vargas",
        "Princesa Isabel",
      ],
      correctIndex: 3,
    },
    {
      question: "A Revolução Industrial teve início em qual país?",
      options: ["França", "Alemanha", "Inglaterra", "Estados Unidos"],
      correctIndex: 2,
    },
    {
      question:
        "Qual foi o principal conflito armado no século XX que envolveu diversos países?",
      options: [
        "Revolução Francesa",
        "Segunda Guerra Mundial",
        "Guerra do Vietnã",
        "Independência dos EUA",
      ],
      correctIndex: 1,
    },
    {
      question: "Quem foi Getúlio Vargas?",
      options: [
        "Imperador do Brasil",
        "Líder militar da independência",
        "Presidente que governou em períodos ditatoriais e democráticos",
        "Revolucionário francês",
      ],
      correctIndex: 2,
    },
  ];

  useEffect(() => {
    if (category == "Ingles") {
      setQuizData(ingles);
    }
    if (category == "Portugues") {
      setQuizData(portugues);
    }
    if (category == "Geografia") {
      setQuizData(geografia);
    }
    if (category == "Historia") {
      setQuizData(historia);
    }
  }, [category]);

  const handleConfirm = (isTimeout = false) => {
    const correctQuestion = quizData[currentQuestionIndex];

    if (!isTimeout && selectedOption === correctQuestion.correctIndex) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setTime(30);
      setActive(true);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    let intervalId;
    if (active && difficulty) {
      intervalId = setInterval(() => {
        setTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalId);
            setActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [active, difficulty]);

  useEffect(() => {
    if (time === 0 || selectedOption !== null) {
      handleConfirm(false);
    }
  }, [time]);

  function conterInit() {
    setTime(15); 
    setActive(true);
  }

  const minimumRequired = 0.6 * quizData.length;
  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="w-screen h-screen bg-blue-500 text-center flex flex-col">
      <Header category={category} setCategory={setCategory} />
      {start ? (
        <div className="bg-amber-600 w-[670px] h-[355px] ml-auto mr-auto mt-12 rounded-2xl p-3 flex flex-col space-y-3">
          {showScore ? (
            <EndScreen
              setShowScore={setShowScore}
              setSelectedOption={setSelectedOption}
              score={score}
              setScore={setScore}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              quizData={quizData}
              minimumRequired={minimumRequired}
            />
          ) : (
            <QuizScreen
              currentQuestion={currentQuestion}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              handleConfirm={handleConfirm}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              difficulty={difficulty}
              conterInit={conterInit}
              time={time}
            />
          )}
        </div>
      ) : (
        <div>
          <GameMode
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          <HomeScreen
            setStart={setStart}
            quizData={quizData}
            conterInit={conterInit}
          />
        </div>
      )}
    </div>
  );
}

export default App;
