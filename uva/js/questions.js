// // Biology questions database
// export const questions = [
//   // Sala: Laboratório
//   {
//     id: 1,
//     question: "O que é um verme?",
//     image: "...",
//     options: ["Um inseto com seis patas", "Um animal alongado, sem membros, geralmente cilíndrico ou achatado", "Um peixe pequeno"],
//     correctAnswer: 1,
//     difficulty: 1,
//     room: "Laboratório",
//     hint: "Pense em um animal alongado, sem membros e que pode ser encontrado em vários lugares."
//   },
//   {
//     id: 2,
//     question: "Os vermes têm esqueleto?",
//     image: "...",
//     options: [" Não possuem esqueleto", " Só os que vivem na água", "Sim, como os répteis"],
//     correctAnswer: 0,
//     difficulty: 1,
//     room: "Laboratório",
//     hint: "Eles são invertebrados."
//   },
//   {
//     id: 3,
//     question: "Como se locomove uma minhoca?",
//     image: "...",
//     options: ["Voando", "Usando patas articuladas", "Contrações musculares e cerdas"],
//     correctAnswer: 2,
//     difficulty: 1,
//     room: "Laboratório",
//     hint: "Ela se arrasta usando músculos e pequenas cerdas."
//   },
//   {
//     id: 4,
//     question: "Os vermes são unicelulares ou multicelulares?",
//     image: "...",
//     options: ["Unicelulares", " Multicelulares", "Não têm células"],
//     correctAnswer: 1,
//     difficulty: 1,
//     room: "Laboratório",
//     hint: "Mesmo os pequenos têm tecidos e órgãos."
//   },

//   // Sala: Jardim
//   {
//     id: 5,
//     question: "Qual o papel ecológico das minhocas no solo?",
//     image: "...",
//     options: ["Ajudam na aeração e fertilidade do solo", "Absorvem toda a água", "Atacam raízes"],
//     correctAnswer: 0,
//     difficulty: 1,
//     room: "Jardim",
//     hint: "São amigas da agricultura!"
//   },
//   {
//     id: 6,
//     question: "O que as minhocas se alimentam?",
//     image: "...",
//     options: ["Plantas vivas", "Sangue", "Matéria orgânica em decomposição"],
//     correctAnswer: 2,
//     difficulty: 1,
//     room: "Jardim",
//     hint: "Elas reciclam restos orgânicos."
//   },
//   {
//     id: 7,
//     question: "Como as minhocas respiram?",
//     image: "...",
//     options: ["Pela pele (respiração cutânea)", "Por brânquias", "Por antenas"],
//     correctAnswer: 0,
//     difficulty: 2,
//     room: "Jardim",
//     hint: "A pele precisa estar úmida."
//   },
//   {
//     id: 8,
//     question: "As minhocas ajudam no crescimento das plantas porque...",
//     image: "...",
//     options: ["Atacam insetos que comem raízes", "Melhoram a circulação de ar e nutrientes no solo", "Aumentam o pH do solo"],
//     correctAnswer: 1,
//     difficulty: 2,
//     room: "Jardim",
//     hint: "Elas abrem túneis no solo e produzem húmus."
//   },

//   // Sala: Hospital
//   {
//     id: 9,
//     question: "O que caracteriza um verme parasita?",
//     image: "...",
//     options: ["Vive livremente no solo", "Vive no corpo de outro ser e causa prejuízo", "Produz seu próprio alimento"],
//     correctAnswer: 1,
//     difficulty: 2,
//     room: "Hospital",
//     hint: "Ele depende de outro organismo."
//   },
//   {
//     id: 13,
//     question: "Qual destes faz parte do sistema vascular das plantas?",
//     image: "...",
//     options: ["Xilema", "Estômato", "Cloroplasto"],
//     correctAnswer: 0,
//     difficulty: 3,
//     room: "Estufa",
//     hint: "Esse tecido transporta água e minerais das raízes até os caules."
//   },
//   {
//     id: 17,
//     question: "Qual destas é uma célula procarionte?",
//     image: "...",
//     options: ["Célula animal", "Célula vegetal", "Célula bacteriana"],
//     correctAnswer: 2,
//     difficulty: 3,
//     room: "Microscópio",
//     hint: "Essas células não possuem núcleo delimitado por membrana."
//   },
//   {
//     id: 21,
//     question: "Qual é o processo de fazer uma cópia do DNA chamado?",
//     image: "...",
//     options: ["Tradução", "Transcrição", "Replicação"],
//     correctAnswer: 2,
//     difficulty: 4,
//     room: "Laboratório Avançado",
//     hint: "Esse processo cria duas moléculas idênticas de DNA a partir de uma original."
//   },
//   {
//     "id": 22,
//     "question": "Qual destes NÃO é uma fase da mitose?",
//     "image": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
//     "options": ["Prófase", "Metáfase", "Síntese"],
//     "correctAnswer": 2,
//     "difficulty": 4,
//     "room": "Laboratório Avançado",
//     "hint": "A fase de síntese (fase S) faz parte da interfase, não da mitose."
//   },
//   {
//     "id": 23,
//     "question": "Qual técnica é usada para separar fragmentos de DNA pelo tamanho?",
//     "image": "https://images.pexels.com/photos/8325953/pexels-photo-8325953.jpeg",
//     "options": ["Eletroforese em gel", "Centrifugação", "Cromatografia"],
//     "correctAnswer": 0,
//     "difficulty": 4,
//     "room": "Laboratório Avançado",
//     "hint": "Essa técnica usa um campo elétrico para mover o DNA através de uma matriz de gel."
//   },
//   {
//     "id": 24,
//     "question": "Qual é o estudo da função e interação dos genes chamado?",
//     "image": "https://images.pexels.com/photos/8325928/pexels-photo-8325928.jpeg",
//     "options": ["Citologia", "Genômica", "Histologia"],
//     "correctAnswer": 1,
//     "difficulty": 4,
//     "room": "Laboratório Avançado",
//     "hint": "Esse campo estuda o material genético completo de um organismo."
//   }

// ];

// // Get questions for a specific room
// export function getQuestionsForRoom(roomName) {
//   return questions.filter(question => question.room === roomName);
// }

// // Get a specified number of random questions for a room
// export function getRandomQuestionsForRoom(roomName, count = 3) {
//   const roomQuestions = (roomName);
//   const shuffled = [...roomQuestions].sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, count);
// }

// Arquivo questions.js corrigido com nomes de salas em português

export const questions = [
  // Laboratório
   {
    id: 1,
    question: "O que é um verme?",
    image: "https://labovet.com.br/wp-content/uploads/2024/11/NEMATODEOS_-VERMES-REDONDOS-MAIS-COMUNS-EM-PETS-1024x576.jpg",
    options: ["Um inseto com seis patas", "Um animal alongado, sem membros, geralmente cilíndrico ou achatado", "Um peixe pequeno"],
    correctAnswer: 1,
    difficulty: 1,
    room: "Laboratório",
    hint: "Pense em um animal alongado, sem membros e que pode ser encontrado em vários lugares."
  },
  {
    id: 2,
    question: "Os vermes têm esqueleto?",
    image: "https://i.pinimg.com/736x/0a/80/9d/0a809d411a17b8addb3ab9a397a8e400.jpg",
    options: [" Não possuem esqueleto", " Só os que vivem na água", "Sim, como os répteis"],
    correctAnswer: 0,
    difficulty: 1,
    room: "Laboratório",
    hint: "Eles são invertebrados."
  },
  {
    id: 3,
    question: "Como se locomove uma minhoca?",
    image: "https://i.pinimg.com/736x/4b/8b/ac/4b8bac639ded2c183e25552dbd096f21.jpg",
    options: ["Voando", "Usando patas articuladas", "Contrações musculares e cerdas"],
    correctAnswer: 2,
    difficulty: 1,
    room: "Laboratório",
    hint: "Ela se arrasta usando músculos e pequenas cerdas."
  },
  // {
  //   id: 4,
  //   question: "Os vermes são unicelulares ou multicelulares?",
  //   image: "...",
  //   options: ["Unicelulares", " Multicelulares", "Não têm células"],
  //   correctAnswer: 1,
  //   difficulty: 1,
  //   room: "Laboratório",
  //   hint: "Mesmo os pequenos têm tecidos e órgãos."
  // },

  // Sala: Jardim
  {
    id: 5,
    question: "Qual o papel ecológico das minhocas no solo?",
    image: "https://br.pinterest.com/pin/184647653467647844/",
    options: ["Ajudam na aeração e fertilidade do solo", "Absorvem toda a água", "Atacam raízes"],
    correctAnswer: 0,
    difficulty: 1,
    room: "Jardim",
    hint: "São amigas da agricultura!"
  },
  {
    id: 6,
    question: "O que as minhocas se alimentam?",
    image: "https://br.pinterest.com/pin/606015693589513641/",
    options: ["Plantas vivas", "Sangue", "Matéria orgânica em decomposição"],
    correctAnswer: 2,
    difficulty: 1,
    room: "Jardim",
    hint: "Elas reciclam restos orgânicos."
  },
  {
    id: 7,
    question: "Como as minhocas respiram?",
    image: "https://br.pinterest.com/pin/145593000447297278/",
    options: ["Pela pele (respiração cutânea)", "Por brânquias", "Por antenas"],
    correctAnswer: 0,
    difficulty: 2,
    room: "Jardim",
    hint: "A pele precisa estar úmida."
  },
  {
    id: 8,
    question: "As minhocas ajudam no crescimento das plantas porque...",
    image: "https://br.pinterest.com/pin/293930313195274590/",
    options: ["Atacam insetos que comem raízes", "Melhoram a circulação de ar e nutrientes no solo", "Aumentam o pH do solo"],
    correctAnswer: 1,
    difficulty: 2,
    room: "Jardim",
    hint: "Elas abrem túneis no solo e produzem húmus."
  },

  // Sala: Hospital
  {
    id: 9,
    question: "O que caracteriza um verme parasita?",
    image: "https://br.pinterest.com/pin/474426141979860121/",
    options: ["Vive livremente no solo", "Vive no corpo de outro ser e causa prejuízo", "Produz seu próprio alimento"],
    correctAnswer: 1,
    difficulty: 2,
    room: "Hospital",
    hint: "Ele depende de outro organismo."
  },
  {
  id: 10,
  question: "Qual destes é um exemplo de verme causador de doença em humanos?",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Ascaris_lumbricoides.jpeg", // Ascaris lumbricoides (lombriga)
  options: ["Ascaris lumbricoides", "Borrelia burgdorferi", "Streptococcus pneumoniae"],
  correctAnswer: 0,
  difficulty: 2,
  room: "Hospital",
  hint: "É um verme que pode ser transmitido por alimentos contaminados e vive no intestino."
},
{
  id: 11,
  question: "Como os vermes parasitas podem ser evitados?",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Handwashing_with_soap.jpg", // Higiene pessoal
  options: ["Comendo carne crua", "Lavando bem as mãos e alimentos", "Andando descalço em locais úmidos"],
  correctAnswer: 1,
  difficulty: 2,
  room: "Hospital",
  hint: "Boas práticas de higiene são essenciais para prevenção."
},
  {
    id: 13,
    question: "Qual destes faz parte do sistema vascular das plantas?",
    image: "...",
    options: ["Xilema", "Estômato", "Cloroplasto"],
    correctAnswer: 0,
    difficulty: 3,
    room: "Estufa",
    hint: "Esse tecido transporta água e minerais das raízes até os caules."
  },
  {
  id: 14,
  question: "Qual estrutura da folha é responsável pelas trocas gasosas?",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Stoma_opening_and_closing.gif", // Estômatos
  options: ["Estômato", "Cloroplasto", "Xilema"],
  correctAnswer: 0,
  difficulty: 3,
  room: "Estufa",
  hint: "Ela abre e fecha para controlar a entrada e saída de gases."
},
{
  id: 15,
  question: "Qual processo é essencial para as plantas produzirem seu próprio alimento?",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Photosynthesis.gif", // Fotossíntese
  options: ["Respiração celular", "Fermentação", "Fotossíntese"],
  correctAnswer: 2,
  difficulty: 2,
  room: "Estufa",
  hint: "Envolve luz solar, gás carbônico e água para formar glicose."
},
{
  id: 16,
  question: "Qual organela celular é responsável pela produção de energia?",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Mitochondrion_structure.svg", // Mitocôndria
  options: ["Lisossomo", "Mitocôndria", "Ribossomo"],
  correctAnswer: 1,
  difficulty: 3,
  room: "Microscópio",
  hint: "É conhecida como a 'usina de energia' da célula."
},
{
  id: 18,
  question: "Qual estrutura celular contém o material genético nas células eucarióticas?",
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Animal_Cell.svg", // Núcleo celular
  options: ["Núcleo", "Citoplasma", "Retículo endoplasmático"],
  correctAnswer: 0,
  difficulty: 3,
  room: "Microscópio",
  hint: "É envolto por uma membrana e guarda o DNA."
},
  {
    id: 17,
    question: "Qual destas é uma célula procarionte?",
    image: "...",
    options: ["Célula animal", "Célula vegetal", "Célula bacteriana"],
    correctAnswer: 2,
    difficulty: 3,
    room: "Microscópio",
    hint: "Essas células não possuem núcleo delimitado por membrana."
  },
  {
    id: 19,
    question: "Qual é o processo de fazer uma cópia do DNA chamado?",
    image: "...",
    options: ["Tradução", "Transcrição", "Replicação"],
    correctAnswer: 2,
    difficulty: 4,
    room: "Laboratório Avançado",
    hint: "Esse processo cria duas moléculas idênticas de DNA a partir de uma original."
  },
  {
  id: 20,
  question: "Qual destes NÃO é uma fase da mitose?",
  image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
  options: ["Prófase", "Metáfase", "Síntese"],
  correctAnswer: 2,
  difficulty: 4,
  room: "Laboratório Avançado",
  hint: "A fase de síntese (fase S) faz parte da interfase, não da mitose."
},
{
  id: 21,
  question: "Qual técnica é usada para separar fragmentos de DNA pelo tamanho?",
  image: "https://images.pexels.com/photos/8325953/pexels-photo-8325953.jpeg",
  options: ["Eletroforese em gel", "Centrifugação", "Cromatografia"],
  correctAnswer: 0,
  difficulty: 4,
  room: "Laboratório Avançado",
  hint: "Essa técnica usa um campo elétrico para mover o DNA através de uma matriz de gel."
},
{
  id: 22,
  question: "Qual é o estudo da função e interação dos genes chamado?",
  image: "https://images.pexels.com/photos/8325928/pexels-photo-8325928.jpeg",
  options: ["Citologia", "Genômica", "Histologia"],
  correctAnswer: 1,
  difficulty: 4,
  room: "Laboratório Avançado",
  hint: "Esse campo estuda o material genético completo de um organismo."
}

];

// Funções auxiliares
export function getQuestionsForRoom(roomName) {
  return questions.filter(question => question.room === roomName);
}

export function getRandomQuestionsForRoom(roomName, count = 3) {
  const roomQuestions = getQuestionsForRoom(roomName);
  const shuffled = [...roomQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}