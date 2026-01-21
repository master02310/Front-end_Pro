let startTime = 85
let timeLeft = startTime
let seconds = 60

const timerEl = document.getElementById("timer")
const startBtn = document.getElementById("start")

let timerId = null

function formatTime(time) {
    const minutes = Math.floor(time / seconds)
    const secs = time % seconds

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

timerEl.textContent = formatTime(timeLeft)

function updateTimer() {
    timeLeft--
    timerEl.textContent = formatTime(timeLeft)

    if (timeLeft === 0) {
        clearInterval(timerId)
        timerId = null
    }
}

startBtn.addEventListener("click", () => {
    if (timerId !== null) return

    let timeForSetInterval = 1000

    updateTimer()
    timerId = setInterval(updateTimer, timeForSetInterval)
})
