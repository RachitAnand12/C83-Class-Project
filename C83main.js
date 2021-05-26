var canvas = document.getElementById("mycanvas")

var ctx = canvas.getContext("2d")

var color = "black"
var screenWidth = screen.width
var newCanvasWidth = screenWidth - 60
var newCanvasHEIGHT = screen.height - 300

if (screenWidth < 992) {
    document.getElementById("mycanvas").width=newCanvasWidth
    document.getElementById("mycanvas").height=newCanvasHEIGHT
    document.body.style.overflow="hidden"
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

var newx, newy, lastx, lasty



canvas.addEventListener("touchstart", ts)

function ts (e) {
     color = document.getElementById("mycolor").value
    console.log("user touched the canvas")
}

canvas.addEventListener("touchmove", tm)

function tm(e) {
 newx = e.touches[0].clientX - canvas.offsetLeft
 newy = e.touches[0].clientY - canvas.offsetTop
 
 
     ctx.beginPath() 
    ctx.strokeStyle = color
ctx.lineWidth = 2
ctx.moveTo (lastx, lasty)
ctx.lineTo (newx, newy)
ctx.stroke()
    
    lastx = newx
    lasty = newy
}