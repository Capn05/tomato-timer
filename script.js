let updateTimerDisplay = (minutes, seconds) => {
    let time = document.getElementById('time-left');
    let timeString = minutes.padStart(10,0) + ":" + seconds
    time.textContent= timeString
    time.style.color = "red";
}
