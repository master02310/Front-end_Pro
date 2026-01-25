const API_KEY = "3e6b1cf95227427faa4a70b58103af51"
const CITY = "Kharkov"
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=ua`

const tempEl = document.getElementById("temperature")
const feelsEl = document.getElementById("feels")
const descEl = document.getElementById("description")
const iconEl = document.getElementById("icon")
const timeEl = document.getElementById("time")
const dateEl = document.getElementById("date")
const cityEl = document.getElementById("city")
const refreshBtn = document.getElementById("refresh")

function updateTime() {
    const now = new Date()

    timeEl.textContent = now.toLocaleTimeString("uk-UA", {
        hour: "2-digit",
        minute: "2-digit"
    })

    dateEl.textContent = now.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        weekday: "short"
    })
}

function loadWeather() {
    fetch(URL)
        .then(result => result.json())
        .then(data => {
            cityEl.textContent = data.name
            tempEl.textContent = Math.round(data.main.temp)
            feelsEl.textContent = Math.round(data.main.feels_like)
            descEl.textContent = data.weather[0].description
            iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
}

function refreshWidget() {
    updateTime()
    loadWeather()
}

refreshBtn.addEventListener("click", refreshWidget)

refreshWidget()
