
let milliseconds = 0
let seconds = 0
let minutes = 0



let digits = document.getElementById('digits')
let startButton = document.getElementById('start-btn')
let lap = document.getElementById('Add-Lap')
let interval;



function start () {
    startButton.disabled = true
    
    alert("You clicked the start button") 
    

    interval = setInterval (function (){
        milliseconds = milliseconds + 10
      
        
        if (milliseconds >= 1000){
            seconds = seconds + 1
            milliseconds = 0
    
        }

        if (seconds>= 60){
            minutes += 1
            seconds = 0
        }
        console.log(seconds)
        console.log(milliseconds)
        console.log(minutes)
        
        digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + '.' + milliseconds
       
    }, 10)

}


function stop () {
    clearInterval(interval)
    startButton.disabled = false

    alert("You clicked the Stop Button")
    
}
function reset (){
    stop()
    seconds = 0
    milliseconds = 0
    minutes = 0
    digits.innerHTML = String(minutes).padStart(2, '0') + '.' + milliseconds
    
    alert("You clicked the reset button")

}

function lap() {
    
 }