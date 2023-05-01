
let milliseconds = 0
let seconds = 0
let minutes = 0



let digits = document.getElementById('digits')

let interval;


function start () {
    alert("You clicked the start button") 

    interval = setInterval (function (){
        milliseconds = milliseconds + 10
      
        
        if (milliseconds >= 1000){
            seconds = seconds + 1
            milliseconds = 0
    
        }
        
        digits.innerHTML = minutes + ':' + String(seconds).padStart(2, '0') + '.' + milliseconds
       
    }, 10)

}


function stop () {
    clearInterval(interval)

    alert("You clicked the Stop Button")
    
}
function reset (){
    stop()
    
    alert("You clicked the reset button")

}