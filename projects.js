const pigBtn = document.querySelector("#choosePig")
const rpsBtn = document.querySelector("#chooseRps")
const memoryBtn = document.querySelector("#chooseMemory")
const guessBtn = document.querySelector("#chooseGuess")
const drumBtn = document.querySelector("#chooseDrum")
const calcBtn = document.querySelector("#chooseCalc")

//Links Button
const linkBtn = document.querySelector("#gameLinks")
const repoBtn = document.querySelector("#repoLinks")

// Game pictures
const firstPhoto = document.querySelector(".gamePhoto1")
const secondPhoto = document.querySelector(".gamePhoto2")

function press() {
    pigBtn.classList.remove("pressedButton")
    rpsBtn.classList.remove("pressedButton") 
    memoryBtn.classList.remove("pressedButton") 
    guessBtn.classList.remove("pressedButton") 
    calcBtn.classList.remove("pressedButton") 
    drumBtn.classList.remove("pressedButton")
    firstPhoto.classList.remove("rpsOne")
    secondPhoto.classList.remove("rpsTwo")
    firstPhoto.classList.remove("memoryOne")
    secondPhoto.classList.remove("memoryTwo")
    firstPhoto.classList.remove("guessOne")
    secondPhoto.classList.remove("guessTwo")
    firstPhoto.classList.remove("guessOne")
    secondPhoto.classList.remove("guessTwo")
    firstPhoto.classList.remove("drumOne")
    secondPhoto.classList.remove("drumTwo")
    firstPhoto.classList.remove("calcOne")
    secondPhoto.classList.remove("calcTwo")
}


function pig() {
    press()
    pigBtn.classList.add("pressedButton") 
    linkBtn.getAttribute("href")
    linkBtn.setAttribute("href", "https://halsik.github.io/Pig-Game/")
    repoBtn.getAttribute("href")
    repoBtn.setAttribute("href", "https://github.com/Halsik/Pig-Game")
}

function rps() {
    press()
    rpsBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("rpsOne")
    secondPhoto.classList.add("rpsTwo")
    linkBtn.getAttribute("href")
    linkBtn.setAttribute("href", "https://halsik.github.io/RockPaperScissorsGame/")
    repoBtn.getAttribute("href")
    repoBtn.setAttribute("href", "https://github.com/Halsik/RockPaperScissorsGame")
}

function memory() {
    press()
    memoryBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("memoryOne")
    secondPhoto.classList.add("memoryTwo")
    linkBtn.getAttribute("href")
    linkBtn.setAttribute("href", "https://halsik.github.io/MemoryGameMain/")
    repoBtn.getAttribute("href")
    repoBtn.setAttribute("href", "https://github.com/Halsik/MemoryGameMain")
}

function guess() {
    press()
    guessBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("guessOne")
    secondPhoto.classList.add("guessTwo")
    linkBtn.getAttribute("href")
    linkBtn.setAttribute("href", "https://halsik.github.io/WeatherApp/")
    repoBtn.getAttribute("href")
    repoBtn.setAttribute("href", "https://github.com/Halsik/WeatherApp")
}

function calc() {
    press()
    calcBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("calcOne")
    secondPhoto.classList.add("calcTwo")
    linkBtn.getAttribute("href")
    linkBtn.setAttribute("href", "https://halsik.github.io/Calculator-main/")
    repoBtn.getAttribute("href")
    repoBtn.setAttribute("href", "https://github.com/Halsik/Calculator-main")
}

function drum() {
    press()
    drumBtn.classList.add("pressedButton") 
    firstPhoto.classList.add("drumOne")
    secondPhoto.classList.add("drumTwo")
    linkBtn.getAttribute("href")
    linkBtn.setAttribute("href", "https://halsik.github.io/Drum/")
    repoBtn.getAttribute("href")
    repoBtn.setAttribute("href", "https://github.com/Halsik/Drum")
}
