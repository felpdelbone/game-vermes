// Timer functionality
class Timer {
  constructor() {
    this.duration = 15; // Default duration in seconds
    this.remainingTime = this.duration;
    this.timerInterval = null;
    this.progressElement = null;
    this.textElement = null;
    this.onTimeUp = null;
  }

  // Set up the timer with DOM elements and callback
  setup(progressElement, textElement, onTimeUp, duration = 15) {
    this.progressElement = progressElement;
    this.textElement = textElement;
    this.onTimeUp = onTimeUp;
    this.duration = duration;
    this.remainingTime = duration;
    this.updateDisplay();
  }

  // Start the timer
  start() {
    this.stop(); // Ensure any existing timers are stopped
    this.remainingTime = this.duration;
    this.updateDisplay();
    
    this.timerInterval = setInterval(() => {
      this.remainingTime--;
      this.updateDisplay();
      
      // Add warning class when time is running out
      if (this.remainingTime <= 5) {
        this.progressElement.classList.add('timer-warning');
      }
      
      if (this.remainingTime <= 0) {
        this.stop();
        if (this.onTimeUp && typeof this.onTimeUp === 'function') {
          this.onTimeUp();
        }
      }
    }, 1000);
  }

  // Stop the timer
  stop() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    if (this.progressElement) {
      this.progressElement.classList.remove('timer-warning');
    }
  }

  // Reset the timer
  reset() {
    this.stop();
    this.remainingTime = this.duration;
    this.updateDisplay();
  }

  // Update the timer display
  updateDisplay() {
    if (this.progressElement && this.textElement) {
      const percentage = (this.remainingTime / this.duration) * 100;
      this.progressElement.style.width = `${percentage}%`;
      this.textElement.textContent = this.remainingTime;
    }
  }
}

// Create and export a single instance of Timer for questions
export const questionTimer = new Timer();

// Create and export a single instance of Timer for hints
export const hintTimer = new Timer();