let myForm = document.getElementById("myForm")

let synth = new Tone.Synth().toDestination()

function onSumbit (e){
    e.preventDefault()

    synth.triggerAttack("v6")

    alert(myForm.elements["yourName"].value)

    let duration = parseFloat(myForm.elements["duration"].value)

    



    synth.triggerRelease(Tone.now() + duration)
}


myForm.addEventListener("submit", onSumbit)