let updateTimerDisplay = (minutes, seconds) => {
    let time = document.getElementById('time-left');
padStart(10,0);
    let timeString = minutes.padStart(10,0) + ":" + seconds
    time.textContent= timeString
    time.style.color = "red";
}

function startTimer(duration) {
    // Convert duration to milliseconds
    const milliseconds = duration * 1000;
    
    const timerDisplay = document.getElementById("timer-display");
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor(milliseconds % 60000 / 1000);
    timerDisplay.textContent = `${minutes} : ${seconds}`;
    
    // Decrease the number of seconds remaining by one every second
    const interval = setInterval(() => {
      milliseconds -= 1000;
      if (milliseconds <= 0) {
        // Stop the timer when it reaches zero
        clearInterval(interval);
        return;
      }
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = Math.floor(milliseconds % 60000 / 1000);
      timerDisplay.textContent = `${minutes}m ${seconds}s`;
    }, 1000);
  }