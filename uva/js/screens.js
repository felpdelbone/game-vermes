// Screen transitions and UI management
import { gameState } from './gameState.js';
import { getRandomQuestionsForRoom } from './questions.js';
import { questionTimer, hintTimer } from './timer.js';

// Get all screens
const welcomeScreen = document.getElementById('welcome-screen');
const roomSelectionScreen = document.getElementById('room-selection-screen');
const questionScreen = document.getElementById('question-screen');
const hintScreen = document.getElementById('hint-screen');
const feedbackOverlay = document.getElementById('feedback-overlay');

// Get specific elements
const roomElements = document.querySelectorAll('.room');
const roomProgressText = document.getElementById('room-progress-text');
const currentRoomName = document.getElementById('current-room-name');
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-btn');
const feedbackText = document.getElementById('feedback-text');
const hintText = document.getElementById('hint-text');

// Get timer elements
const timerProgress = document.getElementById('timer-progress');
const timerText = document.getElementById('timer-text');
const hintTimerProgress = document.getElementById('hint-timer-progress');
const hintTimerText = document.getElementById('hint-timer-text');

// Show a specific screen
export function showScreen(screen) {
  // Hide all screens
  welcomeScreen.classList.remove('active');
  roomSelectionScreen.classList.remove('active');
  questionScreen.classList.remove('active');
  hintScreen.classList.remove('active');
  
  // Show the requested screen
  screen.classList.add('active');
}

// Show the welcome screen
export function showWelcomeScreen() {
  showScreen(welcomeScreen);
}

// Show the room selection screen
export function showRoomSelectionScreen() {
  showScreen(roomSelectionScreen);
  updateRoomSelectionUI();
}

// Show the question screen
export function showQuestionScreen(roomName) {
  gameState.setCurrentRoom(roomName);
  
  // Get random questions for this room
  const questions = getRandomQuestionsForRoom(roomName);
  gameState.setCurrentQuestions(questions);
  
  // Update the UI with the current question
  updateQuestionUI();
  
  // Set up and start the timer
  questionTimer.setup(timerProgress, timerText, handleTimeUp);
  questionTimer.start();
  
  // Show the question screen
  showScreen(questionScreen);
}

// Show the hint screen
export function showHintScreen(hint) {
  // Update the hint text
  hintText.textContent = hint;
  
  // Set up and start the hint timer
  hintTimer.setup(hintTimerProgress, hintTimerText, () => {
    showRoomSelectionScreen();
  });
  hintTimer.start();
  
  // Show the hint screen
  showScreen(hintScreen);
}

// Update the room selection UI
export function updateRoomSelectionUI() {
  // Update each room's status
  roomElements.forEach(roomElement => {
    const roomName = roomElement.getAttribute('data-room');
    const isUnlocked = gameState.isRoomUnlocked(roomName);
    
    roomElement.classList.toggle('unlocked', isUnlocked);
    roomElement.classList.toggle('locked', !isUnlocked);
    
    const statusElement = roomElement.querySelector('.room-status');
    statusElement.textContent = isUnlocked ? 'Desbloqueado' : 'Bloqueado';
    statusElement.classList.toggle('unlocked', isUnlocked);
    statusElement.classList.toggle('locked', !isUnlocked);
  });
  
  // Update progress text if a room is selected
  if (gameState.currentRoom) {
    const progress = gameState.getCurrentRoomProgress();
    roomProgressText.textContent = `Progresso: ${progress}/${gameState.questionsToUnlock} questões respondidas corretamente`;
  } else {
    roomProgressText.textContent = 'Selecione uma sala para começar a responder questões';
  }
  
  // Update points display
  gameState.updatePointsDisplay();
}

// Update the question UI
export function updateQuestionUI() {
  const currentQuestion = gameState.getCurrentQuestion();
  
  if (currentQuestion) {
    // Update room name
    currentRoomName.textContent = gameState.currentRoom;
    
    // Update question image
    questionImage.src = currentQuestion.image;
    questionImage.alt = `Questão sobre ${currentQuestion.question}`;
    
    // Update question text
    questionText.textContent = currentQuestion.question;
    
    // Update option buttons
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      
      // Reset any previous classes
      button.classList.remove('correct-answer', 'wrong-answer');
    });
  }
}

// Handle time up during a question
function handleTimeUp() {
  const currentQuestion = gameState.getCurrentQuestion();
  showHintScreen(currentQuestion.hint);
}

// Show feedback overlay
export function showFeedback(message, isCorrect, callback) {
  feedbackText.textContent = message;
  feedbackOverlay.classList.add('active');
  
  // Hide the overlay after a delay
  setTimeout(() => {
    feedbackOverlay.classList.remove('active');
    if (callback && typeof callback === 'function') {
      callback();
    }
  }, 2000);
}

// Initialize event listeners for screens
export function initializeScreenListeners() {
  // Start button on welcome screen
  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', () => {
    showRoomSelectionScreen();
  });
  
  // Room selection
  roomElements.forEach(room => {
    room.addEventListener('click', () => {
      const roomName = room.getAttribute('data-room');
      if (gameState.isRoomUnlocked(roomName)) {
        showQuestionScreen(roomName);
      } else {
        room.classList.add('locked-animation');
        setTimeout(() => {
          room.classList.remove('locked-animation');
        }, 500);
      }
    });
  });
}