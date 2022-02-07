setInterval(setClock, 1000)

const offsets = [-3,-5,-6,-7,-8,+1];
offsets.forEach(offset => generateClock(offset));

const hourHand = document.querySelector('[data-hour-hand-8]')
const minuteHand = document.querySelector('[data-minute-hand-8]')
const secondHand = document.querySelector('[data-second-hand-8]')



function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getUTCSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getUTCMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getUTCHours()) / 12

    // calculation should iterate over the array offsets    
    // for each offset, find the data hands using the offset
    // call setRotation for each of the hands using the UTC ratios
    // with the offset being applied to the hour hand

    // Step 1 - iterate over offsets array
    offsets.forEach(function (offset) {
        console.log(offset);

        // Step 2 - for each offset, we will extract the `data-hour/minute/second-hand${offset}`...    
        const hourHand = document.querySelector(`[data-hour-hand${offset}]`)
        const minuteHand = document.querySelector(`[data-minute-hand${offset}]`)
        const secondHand = document.querySelector(`[data-second-hand${offset}]`)

        // Step 3 - set the rotation for each hand (special attention to the hoursRatio)
        setRotation(secondHand, secondsRatio)
        setRotation(minuteHand, minutesRatio)
        setRotation(hourHand, hoursRatio + (offset / 12))
    });
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

function generateClock(offset) {
    // <div class="clock">
    //     <div class="hand hour" data-hour-hand-8></div>
    //     <div class="hand minute" data-minute-hand-8></div>
    //     <div class="hand second" data-second-hand-8></div>
    //     <div class="offset">-8</div>
    //     <div class="number number1">1</div>
    //     <div class="number number2">2</div>
    //     <div class="number number3">3</div>
    //     <div class="number number4">4</div>
    //     <div class="number number5">5</div>
    //     <div class="number number6">6</div>
    //     <div class="number number7">7</div>
    //     <div class="number number8">8</div>
    //     <div class="number number9">9</div>
    //     <div class="number number10">10</div>
    //     <div class="number number11">11</div>
    //     <div class="number number12">12</div>
    // </div>

    // Attempt to inset a new div around all of "clock"
    // This code would likely go here

    const newDiv = document.createElement("div");
    newDiv.className = "clock";
    document.body.append(newDiv);

    const hourDiv = document.createElement("div");
    hourDiv.classList.add("hand", "hour");
    hourDiv.setAttribute(`data-hour-hand${offset}`,"");
    newDiv.append(hourDiv);

    const minuteDiv = document.createElement("div");
    minuteDiv.classList.add("hand", "minute");
    minuteDiv.setAttribute(`data-minute-hand${offset}`,"");
    newDiv.append(minuteDiv);

    const secondDiv = document.createElement("div");
    secondDiv.classList.add("hand", "second");
    secondDiv.setAttribute(`data-second-hand${offset}`,"");
    newDiv.append(secondDiv);

    const offsetDiv = document.createElement("div");
    offsetDiv.className = "offset";
    const offsetContent = document.createTextNode(offset.toString());
    offsetDiv.appendChild(offsetContent);
    newDiv.append(offsetDiv);

    const hours = [1,2,3,4,5,6,7,8,9,10,11,12];

    hours.forEach(hour => {
        const hoursDiv = document.createElement("div");
        const hoursContent = document.createTextNode(hour.toString());
        hoursDiv.appendChild(hoursContent);
        hoursDiv.classList.add("number", `number${hour}`);
        newDiv.append(hoursDiv);
    })
}

// Make an array that contains the offsets -7 and -8
// Interate over the array will provide the offset
// Pass offset into function that creates a clock div and creates data-hour-hand-#

setClock()