let count = 0
let hasInterval = false
let intervalId

const reset = document.getElementById("reset");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const clock = document.getElementById('clock')

start.addEventListener('click', () => {
    intervalId = setInterval(() => {
        count++
        clock.innerHTML = count
    }, 1000);
    hasInterval = true
})


stop.onclick() = () => {
    clearInterval(intervalId)
    hasInterval = false
}

reset.onclick() = () => {
    hasInterval = false
    count = 0
    clock.innerHTML = count
    clearInterval(intervalId)
}