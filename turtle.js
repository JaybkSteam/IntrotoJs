let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(0, 0, 0)
turtle.setFillStyle('red')

turtle.setPosition(200,20)

turtle.beginPath()
turtle.arc(20,360)
turtle.closePath()
turtle.fill()

turtle.setPosition('green')

turtle.setPosition(155,30)


turtle.right(60)

    turtle.forward(50)
    turtle.right(60)     
    turtle.forward(50)
    turtle.right(60)
    turtle.forward(90)
    turtle.right(90)
    turtle.forward(90)
    turtle.right(90)
    turtle.forward(90)
    turtle.right(90)
    turtle.forward(90)
    turtle.right(90)
    turtle.forward(90)
    turtle.right(50)
   
  




