// Game state management
class GameState {
  constructor() {
    this.unlockedRooms = ["Laboratory"];
    this.roomOrder = [
      "Laboratorio",
      "Garden",
      "Hospital",
      "Greenhouse",
      "Microscope",
      "Advanced Lab"
    ];
    this.roomProgress = {
      "Laboratory": 0,
      "Garden": 0,
      "Hospital": 0,
      "Greenhouse": 0,
      "Microscope": 0,
      "Advanced Lab": 0
    };
    this.currentRoom = null;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.questionsToUnlock = 3;
    this.points = 0; // Added points system
  }

  // Add points
  addPoints(amount) {
    this.points += amount;
    this.updatePointsDisplay();
  }

  // Update points display
  updatePointsDisplay() {
    const pointsElement = document.getElementById('points-display');
    if (pointsElement) {
      pointsElement.textContent = `Pontos: ${this.points}`;
    }
  }

  // Check if a room is unlocked
  isRoomUnlocked(roomName) {
    return this.unlockedRooms.includes(roomName);
  }

  // Get the next room to unlock
  getNextRoomToUnlock() {
    const currentRoomIndex = this.roomOrder.indexOf(this.currentRoom);
    if (currentRoomIndex < this.roomOrder.length - 1) {
      return this.roomOrder[currentRoomIndex + 1];
    }
    return null;
  }

  // Unlock a room
  unlockRoom(roomName) {
    if (!this.isRoomUnlocked(roomName)) {
      this.unlockedRooms.push(roomName);
      return true;
    }
    return false;
  }

  // Set the current room
  setCurrentRoom(roomName) {
    this.currentRoom = roomName;
  }

  // Set questions for the current room
  setCurrentQuestions(questions) {
    this.currentQuestions = questions;
    this.currentQuestionIndex = 0;
  }

  // Get the current question
  getCurrentQuestion() {
    return this.currentQuestions[this.currentQuestionIndex];
  }

  // Move to the next question
  nextQuestion() {
    if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    }
    return false;
  }

  // Update room progress when a question is answered correctly
  updateRoomProgress(roomName) {
    this.roomProgress[roomName]++;
    this.addPoints(100); // Add points for correct answer
    
    // Check if we should unlock the next room
    if (this.roomProgress[roomName] >= this.questionsToUnlock) {
      const nextRoom = this.getNextRoomToUnlock();
      if (nextRoom) {
        this.addPoints(500); // Bonus points for unlocking a room
        return this.unlockRoom(nextRoom);
      }
    }
    
    return false;
  }

  // Get progress for the current room
  getCurrentRoomProgress() {
    return this.roomProgress[this.currentRoom];
  }

  // Reset progress for a room
  resetRoomProgress(roomName) {
    this.roomProgress[roomName] = 0;
  }
}

export const gameState = new GameState();
