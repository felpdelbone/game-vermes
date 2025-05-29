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
    image: "https://example.com/verme.jpg",
    options: ["Um inseto com seis patas", "Um animal alongado, sem membros, geralmente cilíndrico ou achatado", "Um peixe pequeno"],
    correctAnswer: 1,
    difficulty: 1,
    room: "Laboratório",
    hint: "Pense em um animal alongado, sem membros e que pode ser encontrado em vários lugares."
  },
  {
    id: 2,
    question: "Os vermes têm esqueleto?",
    image: "https://example.com/verme2.jpg",
    options: ["Não possuem esqueleto", "Só os que vivem na água", "Sim, como os répteis"],
    correctAnswer: 0,
    difficulty: 1,
    room: "Laboratório",
    hint: "Eles são invertebrados."
  },
  {
    id: 3,
    question: "Como se locomove uma minhoca?",
    image: "https://example.com/minhoca.jpg",
    options: ["Voando", "Usando patas articuladas", "Contrações musculares e cerdas"],
    correctAnswer: 2,
    difficulty: 1,
    room: "Laboratório",
    hint: "Ela se arrasta usando músculos e pequenas cerdas."
  },

  // Jardim
  {
    id: 4,
    question: "Qual o papel ecológico das minhocas no solo?",
    image: "https://example.com/solo.jpg",
    options: ["Ajudam na aeração e fertilidade do solo", "Absorvem toda a água", "Atacam raízes"],
    correctAnswer: 0,
    difficulty: 1,
    room: "Jardim",
    hint: "São amigas da agricultura!"
  },
  {
    id: 5,
    question: "O que as minhocas se alimentam?",
    image: "https://example.com/alimentacao.jpg",
    options: ["Plantas vivas", "Sangue", "Matéria orgânica em decomposição"],
    correctAnswer: 2,
    difficulty: 1,
    room: "Jardim",
    hint: "Elas reciclam restos orgânicos."
  },
  {
    id: 6,
    question: "Como as minhocas respiram?",
    image: "https://example.com/respiracao.jpg",
    options: ["Pela pele (respiração cutânea)", "Por brânquias", "Por antenas"],
    correctAnswer: 0,
    difficulty: 2,
    room: "Jardim",
    hint: "A pele precisa estar úmida."
  },

  // Hospital
  {
    id: 7,
    question: "O que caracteriza um verme parasita?",
    image: "https://example.com/parasita.jpg",
    options: ["Vive livremente no solo", "Vive no corpo de outro ser e causa prejuízo", "Produz seu próprio alimento"],
    correctAnswer: 1,
    difficulty: 2,
    room: "Hospital",
    hint: "Ele depende de outro organismo."
  },
  {
    id: 8,
    question: "Qual das doenças é causada por um platelminto?",
    image: "https://example.com/esquistossomose.jpg",
    options: ["Esquistossomose", "Raiva", "Gripe"],
    correctAnswer: 0,
    difficulty: 2,
    room: "Hospital",
    hint: "O Schistosoma é o culpado."
  },

  // Estufa
  {
    id: 9,
    question: "Qual destes faz parte do sistema vascular das plantas?",
    image: "https://example.com/xilema.jpg",
    options: ["Xilema", "Estômato", "Cloroplasto"],
    correctAnswer: 0,
    difficulty: 3,
    room: "Estufa",
    hint: "Esse tecido transporta água e minerais das raízes até os caules."
  },
  {
    id: 10,
    question: "Qual hormônio vegetal promove o alongamento do caule?",
    image: "https://example.com/auxina.jpg",
    options: ["Etileno", "Auxina", "Ácido abscísico"],
    correctAnswer: 1,
    difficulty: 3,
    room: "Estufa",
    hint: "Esse hormônio faz as plantas crescerem em direção à luz."
  },

  // Microscópio
  {
    id: 11,
    question: "Qual destas é uma célula procarionte?",
    image: "https://example.com/procarionte.jpg",
    options: ["Célula animal", "Célula vegetal", "Célula bacteriana"],
    correctAnswer: 2,
    difficulty: 3,
    room: "Microscópio",
    hint: "Essas células não possuem núcleo delimitado por membrana."
  },
  {
    id: 12,
    question: "Qual é a unidade básica da hereditariedade?",
    image: "https://example.com/gene.jpg",
    options: ["Célula", "Gene", "Cromossomo"],
    correctAnswer: 1,
    difficulty: 3,
    room: "Microscópio",
    hint: "Esses segmentos de DNA determinam características específicas."
  },

  // Laboratório Avançado
  {
    id: 13,
    question: "Qual é o processo de fazer uma cópia do DNA chamado?",
    image: "https://example.com/dna.jpg",
    options: ["Tradução", "Transcrição", "Replicação"],
    correctAnswer: 2,
    difficulty: 4,
    room: "Laboratório Avançado",
    hint: "Esse processo cria duas moléculas idênticas de DNA a partir de uma original."
  },
  {
    id: 14,
    question: "Qual destes NÃO é uma fase da mitose?",
    image: "https://example.com/mitose.jpg",
    options: ["Prófase", "Metáfase", "Síntese"],
    correctAnswer: 2,
    difficulty: 4,
    room: "Laboratório Avançado",
    hint: "A fase de síntese (fase S) faz parte da interfase, não da mitose."
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