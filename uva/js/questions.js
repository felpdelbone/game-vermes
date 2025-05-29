// Biology questions database
export const questions = [
  // Laboratory Room
  {
    id: 1,
    question: "O que é um verme?",
    image: "https://imgs.search.brave.com/MhBrnMp8_1GBmbh2FNjntUAZO4yr5oizuHtNsszWP_Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRFI0NFFy/V1VicFVhY0dCSkV4/SktIRXp2WmFGQjhm/Q0dFdUZuUUp2NGRw/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlw/WTJobC9aaTVpWW1O/cExtTnZMblZyL0wy/RmpaUzkzY3k4Mk5E/QXYvWTNCemNISnZa/SEJpTHpaaS9OV012/YkdsMlpTOWhOekF4/L01XTXhNQzB5Wm1V/NExURXgvWldVdE9H/WTFNaTFtWW1ZMy9N/R1UwWW1ZM05ESXVh/bkJuL0xuZGxZbkE.jpeg",
    options: ["Um inseto com seis patas", "Um animal alongado, sem membros, geralmente cilíndrico ou achatado", "Um peixe pequeno"],
    correctAnswer: 1,
    difficulty: 1,
    room: "Laboratory",
    hint: "Pense em um animal alongado, sem membros e que pode ser encontrado em vários lugares."
  },
  {
    id: 2,
    question: "Os vermes têm esqueleto?",
    image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
    options: [" Não possuem esqueleto", " Só os que vivem na água", "Sim, como os répteis"],
    correctAnswer: 0,
    difficulty: 1,
    room: "Laboratory",
    hint: "Eles são invertebrados."
  },
  {
    id: 3,
    question: "Como se locomove uma minhoca?",
    image: "https://images.pexels.com/photos/3285714/pexels-photo-3285714.jpeg",
    options: ["Voando", "Usando patas articuladas", "Contrações musculares e cerdas"],
    correctAnswer: 2,
    difficulty: 1,
    room: "Laboratory",
    hint: "Ela se arrasta usando músculos e pequenas cerdas."
  },
  {
    id: 4,
    question: "Os vermes são unicelulares ou multicelulares?",
    image: "https://images.pexels.com/photos/7319119/pexels-photo-7319119.jpeg",
    options: ["Unicelulares", " Multicelulares", "Não têm células"],
    correctAnswer: 1,
    difficulty: 1,
    room: "Laboratory",
    hint: "Mesmo os pequenos têm tecidos e órgãos."
  },
  
  // Garden Room
  {
    id: 5,
    question: "Qual o papel ecológico das minhocas no solo?",
    image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg",
    options: ["Ajudam na aeração e fertilidade do solo", "Absorvem toda a água", "Atacam raízes"],
    correctAnswer: 0,
    difficulty: 1,
    room: "Garden",
    hint: "São amigas da agricultura!"
  },
  {
    id: 6,
    question: "O que as minhocas se alimentam?",
    image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg",
    options: ["Plantas vivas", "Sangue", "Matéria orgânica em decomposição"],
    correctAnswer: 2,
    difficulty: 1,
    room: "Garden",
    hint: "Elas reciclam restos orgânicos."
  },
  {
    id: 7,
    question: "Como as minhocas respiram?",
    image: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg",
    options: ["Pela pele (respiração cutânea)", "Por brânquias", "Por antenas"],
    correctAnswer: 0,
    difficulty: 2,
    room: "Garden",
    hint: "A pele precisa estar úmida."
  },
  {
    id: 8,
    question: "As minhocas ajudam no crescimento das plantas porque...",
    image: "https://images.pexels.com/photos/1459709/pexels-photo-1459709.jpeg",
    options: ["Atacam insetos que comem raízes", "Melhoram a circulação de ar e nutrientes no solo", "Aumentam o pH do solo"],
    correctAnswer: 1,
    difficulty: 2,
    room: "Garden",
    hint: "Elas abrem túneis no solo e produzem húmus."
  },
  
  // Hospital Room
  {
    id: 9,
    question: "O que caracteriza um verme parasita?",
    image: "https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg",
    options: ["Vive livremente no solo", "Vive no corpo de outro ser e causa prejuízo", "Produz seu próprio alimento"],
    correctAnswer: 1,
    difficulty: 2,
    room: "Hospital",
    hint: "Ele depende de outro organismo."
  },
  {
    id: 10,
    question: "Qual das doenças é causada por um platelminto?",
    image: "https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg",
    options: ["Esquistossomose", "Raiva", "Gripe"],
    correctAnswer: 0,
    difficulty: 2,
    room: "Hospital",
    hint: "O Schistosoma é o culpado."
  },
   {
    "id": 11,
    "question": "Qual destes ajuda a combater infecções no corpo humano?",
    "image": "https://images.pexels.com/photos/8441781/pexels-photo-8441781.jpeg",
    "options": ["Glóbulos vermelhos", "Glóbulos brancos", "Plaquetas"],
    "correctAnswer": 1,
    "difficulty": 2,
    "room": "Hospital",
    "hint": "Essas células são parte essencial do sistema imunológico."
  },
  {
    "id": 12,
    "question": "Qual é a principal função do sistema digestivo?",
    "image": "https://images.pexels.com/photos/4226258/pexels-photo-4226258.jpeg",
    "options": ["Transportar oxigênio", "Quebrar alimentos", "Filtrar o sangue"],
    "correctAnswer": 1,
    "difficulty": 2,
    "room": "Hospital",
    "hint": "Esse sistema processa os nutrientes dos alimentos."
  },
  {
    "id": 13,
    "question": "Qual destes faz parte do sistema vascular das plantas?",
    "image": "https://images.pexels.com/photos/1459760/pexels-photo-1459760.jpeg",
    "options": ["Xilema", "Estômato", "Cloroplasto"],
    "correctAnswer": 0,
    "difficulty": 3,
    "room": "Estufa",
    "hint": "Esse tecido transporta água e minerais das raízes até os caules."
  },
  {
    "id": 14,
    "question": "Qual hormônio vegetal promove o alongamento do caule?",
    "image": "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg",
    "options": ["Etileno", "Auxina", "Ácido abscísico"],
    "correctAnswer": 1,
    "difficulty": 3,
    "room": "Estufa",
    "hint": "Esse hormônio faz as plantas crescerem em direção à luz."
  },
  {
    "id": 15,
    "question": "Qual é o processo de perda de água pelas folhas das plantas chamado?",
    "image": "https://images.pexels.com/photos/5055228/pexels-photo-5055228.jpeg",
    "options": ["Respiração", "Transpiração", "Fotossíntese"],
    "correctAnswer": 1,
    "difficulty": 3,
    "room": "Estufa",
    "hint": "Esse processo envolve a evaporação da água da superfície das plantas."
  },
  {
    "id": 16,
    "question": "Qual destes NÃO é um método de reprodução assexuada nas plantas?",
    "image": "https://images.pexels.com/photos/5486851/pexels-photo-5486851.jpeg",
    "options": ["Gemação", "Polinização", "Propagação vegetativa"],
    "correctAnswer": 1,
    "difficulty": 3,
    "room": "Estufa",
    "hint": "Polinização faz parte da reprodução sexuada."
  },
  {
    "id": 17,
    "question": "Qual destas é uma célula procarionte?",
    "image": "https://images.pexels.com/photos/3825285/pexels-photo-3825285.jpeg",
    "options": ["Célula animal", "Célula vegetal", "Célula bacteriana"],
    "correctAnswer": 2,
    "difficulty": 3,
    "room": "Microscópio",
    "hint": "Essas células não possuem núcleo delimitado por membrana."
  },
  {
    "id": 18,
    "question": "Qual é a unidade básica da hereditariedade?",
    "image": "https://images.pexels.com/photos/7319445/pexels-photo-7319445.jpeg",
    "options": ["Célula", "Gene", "Cromossomo"],
    "correctAnswer": 1,
    "difficulty": 3,
    "room": "Microscópio",
    "hint": "Esses segmentos de DNA determinam características específicas."
  },
  {
    "id": 19,
    "question": "Qual organela é responsável pela síntese de proteínas?",
    "image": "https://images.pexels.com/photos/9918068/pexels-photo-9918068.jpeg",
    "options": ["Ribossomo", "Complexo de Golgi", "Lisossomo"],
    "correctAnswer": 0,
    "difficulty": 3,
    "room": "Microscópio",
    "hint": "Estas pequenas estruturas podem estar livres no citoplasma ou ligadas ao retículo endoplasmático."
  },
  {
    "id": 20,
    "question": "Qual tipo de microscópio é melhor para observar células vivas?",
    "image": "https://images.pexels.com/photos/5726797/pexels-photo-5726797.jpeg",
    "options": ["Microscópio eletrônico", "Microscópio óptico", "Microscópio de raios X"],
    "correctAnswer": 1,
    "difficulty": 3,
    "room": "Microscópio",
    "hint": "Esse tipo usa luz visível e lentes para ampliar as amostras."
  },
  {
    "id": 21,
    "question": "Qual é o processo de fazer uma cópia do DNA chamado?",
    "image": "https://images.pexels.com/photos/5727889/pexels-photo-5727889.jpeg",
    "options": ["Tradução", "Transcrição", "Replicação"],
    "correctAnswer": 2,
    "difficulty": 4,
    "room": "Laboratório Avançado",
    "hint": "Esse processo cria duas moléculas idênticas de DNA a partir de uma original."
  },
  {
    "id": 22,
    "question": "Qual destes NÃO é uma fase da mitose?",
    "image": "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
    "options": ["Prófase", "Metáfase", "Síntese"],
    "correctAnswer": 2,
    "difficulty": 4,
    "room": "Laboratório Avançado",
    "hint": "A fase de síntese (fase S) faz parte da interfase, não da mitose."
  },
  {
    "id": 23,
    "question": "Qual técnica é usada para separar fragmentos de DNA pelo tamanho?",
    "image": "https://images.pexels.com/photos/8325953/pexels-photo-8325953.jpeg",
    "options": ["Eletroforese em gel", "Centrifugação", "Cromatografia"],
    "correctAnswer": 0,
    "difficulty": 4,
    "room": "Laboratório Avançado",
    "hint": "Essa técnica usa um campo elétrico para mover o DNA através de uma matriz de gel."
  },
  {
    "id": 24,
    "question": "Qual é o estudo da função e interação dos genes chamado?",
    "image": "https://images.pexels.com/photos/8325928/pexels-photo-8325928.jpeg",
    "options": ["Citologia", "Genômica", "Histologia"],
    "correctAnswer": 1,
    "difficulty": 4,
    "room": "Laboratório Avançado",
    "hint": "Esse campo estuda o material genético completo de um organismo."
  }

];

// Get questions for a specific room
export function getQuestionsForRoom(roomName) {
  return questions.filter(question => question.room === roomName);
}

// Get a specified number of random questions for a room
export function getRandomQuestionsForRoom(roomName, count = 3) {
  const roomQuestions = getQuestionsForRoom(roomName);
  const shuffled = [...roomQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}