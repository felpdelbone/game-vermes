// Question handling and answer validation
import { gameState } from './gameState.js';
import { questionTimer } from './timer.js';
import { showHintScreen, showRoomSelectionScreen, showFeedback, updateRoomSelectionUI } from './screens.js';

// Option buttons
const optionButtons = document.querySelectorAll('.option-btn');

// Initialize event listeners for answer options
export function initializeQuestionListeners() {
  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      handleAnswerSelection(parseInt(button.getAttribute('data-index')));
    });
  });
}

// Handle answer selection
function handleAnswerSelection(selectedIndex) {
  // Stop the timer
  questionTimer.stop();
  
  const currentQuestion = gameState.getCurrentQuestion();
  const isCorrect = selectedIndex === currentQuestion.correctAnswer;
  
  // Highlight the selected answer
  highlightAnswer(selectedIndex, isCorrect);
  
  if (isCorrect) {
    // Update progress
    const roomUnlocked = gameState.updateRoomProgress(gameState.currentRoom);
    
    // Show feedback
    if (roomUnlocked) {
      showFeedback(`Correct! New room unlocked!`, true, () => {
        showRoomSelectionScreen();
      });
    } else {
      showFeedback(`Correct! ${gameState.getCurrentRoomProgress()}/${gameState.questionsToUnlock} completed.`, true, () => {
        // Check if there are more questions
        if (gameState.nextQuestion()) {
          // Update UI with next question
          updateQuestionUI();
          // Reset and start the timer
          questionTimer.reset();
          questionTimer.start();
        } else {
          showRoomSelectionScreen();
        }
      });
    }
  } else {
    // Show feedback and then the hint
    showFeedback('Incorrect!', false, () => {
      showHintScreen(currentQuestion.hint);
    });
  }
  
  // Update the room selection UI for when we return
  updateRoomSelectionUI();
}

// Highlight the selected answer
function highlightAnswer(selectedIndex, isCorrect) {
  optionButtons.forEach((button, index) => {
    // Reset any previous classes
    button.classList.remove('correct-answer', 'wrong-answer');
    
    if (index === selectedIndex) {
      if (isCorrect) {
        button.classList.add('correct-answer');
      } else {
        button.classList.add('wrong-answer');
      }
    }
    
    // Also highlight the correct answer if the selected one was wrong
    const currentQuestion = gameState.getCurrentQuestion();
    if (!isCorrect && index === currentQuestion.correctAnswer) {
      setTimeout(() => {
        button.classList.add('correct-answer');
      }, 1000);
    }
  });
}

// Update the question UI with the current question
export function updateQuestionUI() {
  const currentQuestion = gameState.getCurrentQuestion();
  
  if (currentQuestion) {
    // Update room name
    document.getElementById('current-room-name').textContent = gameState.currentRoom;
    
    // Update question image
    const questionImage = document.getElementById('question-image');
    questionImage.src = currentQuestion.image;
    questionImage.alt = `Question about ${currentQuestion.question}`;
    
    // Update question text
    document.getElementById('question-text').textContent = currentQuestion.question;
    
    // Update option buttons
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      
      // Reset any previous classes
      button.classList.remove('correct-answer', 'wrong-answer');
    });
  }
}