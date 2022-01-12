setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand-8]')
const minuteHand = document.querySelector('[data-minute-hand-8]')
const secondHand = document.querySelector('[data-second-hand-8]')

const hourHand7 = document.querySelector('[data-hour-hand-7]')
const minuteHand7 = document.querySelector('[data-minute-hand-7]')
const secondHand7 = document.querySelector('[data-second-hand-7]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getUTCSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getUTCMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getUTCHours()) / 12
    // calculation should iterate over the array offsets
    // for each offset, find the data hands using the offset
    // call setRotation for each of the hands using the UTC ratios
    // with the offset being applied to the hour hand



    // setRotation(secondHand, secondsRatio)
    // setRotation(minuteHand, minutesRatio)
    // setRotation(hourHand, hoursRatio - (8 / 12))
    // setRotation(secondHand7, secondsRatio)
    // setRotation(minuteHand7, minutesRatio)
    // setRotation(hourHand7, hoursRatio - (7 / 12))
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// Make an array that contains the offsets -7 and -8
// Interate over the array will provide the offset
// Pass offset into function that creates a clock div and creates data-hour-hand-#

setClock()