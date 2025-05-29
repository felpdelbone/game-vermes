// Main entry point for the game
import { gameState } from './gameState.js';
import { questionTimer, hintTimer } from './timer.js';
import { 
  showWelcomeScreen, 
  showRoomSelectionScreen,
  initializeScreenListeners 
} from './screens.js';
import { 
  initializeQuestionListeners, 
  updateQuestionUI 
} from './questionHandler.js';

// Initialize the game
function initGame() {
  // Initialize event listeners
  initializeScreenListeners();
  initializeQuestionListeners();
  
  // Start with the welcome screen
  showWelcomeScreen();
  
  // Log initialization
  console.log('Escape Room Biology game initialized');
}

// Start the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);

// Handle window resize (for responsive design)
window.addEventListener('resize', () => {
  // You can add responsive adjustments here if needed
});

// Expose global functions for debugging if needed
window.debugGame = {
  unlockAllRooms: () => {
    gameState.roomOrder.forEach(room => gameState.unlockRoom(room));
    showRoomSelectionScreen();
  },
  resetGame: () => {
    location.reload();
  }
};