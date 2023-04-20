let aquarium = document.getElementById("aquarium")


let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(0, 0, 0)


turtle.setPosition(200,20)

turtle.beginPath()
turtle.setFillStyle('yellow')
turtle.arc(20,360)
turtle.closePath()
turtle.fill()

turtle.setPosition(70,40)

turtle.beginPath()
turtle.setFillStyle('black')
turtle.right(60)

    turtle.forward(50)
    turtle.right(60)     
    turtle.forward(50)
    turtle.right(60)
    turtle.right(90)
    turtle.forward(90)

   
  
    turtle.closePath()
    turtle.fill()

    turtle.setFillStyle('brown')
    turtle.beginPath()
    turtle.right(270)
    turtle.forward(90)
    turtle.right(270)
    turtle.forward(90)
    turtle.right(270)
    turtle.forward(90)
    turtle.right(270)
    turtle.forward(90)
    turtle.closePath()
    turtle.fill()


    turtle.setFillStyle('white')
    turtle.right(270)
    turtle.forward(90)
    turtle.right(270)
    turtle.beginPath()
    turtle.forward(60)
    turtle.right(270)
    turtle.forward(20)
    turtle.right(270)
    turtle.forward(20)
    turtle.right(270)
    turtle.forward(30)
    turtle.closePath()
    turtle.fill()



