crosses = document.getElementsByClassName("cross")
rectangles = document.getElementsByClassName("rectangle")
dots = document.getElementsByClassName("dot")

function randomPosition(min, max) {
    return Math.round(Math.random() * (max - min) + min) + "%"
}

function randomAngle(min, max) {
    return Math.round(Math.random() * (max - min) + min) + "deg"
}

function repositionCross() {
    for (let i = 0; i < crosses.length; i++) {
        if (Math.random() < 0.25) {
            crosses[i].style.display = "block"
        } else {
            crosses[i].style.display = "none"
        }
        crosses[i].style.top = randomPosition(-25, 100)
        crosses[i].style.left = randomPosition(-25, 100)
        var size = randomPosition(10, 30)
        crosses[i].style.width = size
        crosses[i].style.height = size
        crosses[i].style.transform = "rotate(" + randomAngle(-10, 10) + ")"
    }
}

function repositionRectangle() {
    for (let i = 0; i < rectangles.length; i++) {
        if (Math.random() < 0.1) {
            rectangles[i].style.display = "block"
        } else {
            rectangles[i].style.display = "none"
        }
        rectangles[i].style.top = randomPosition(-25, 100)
        var size = randomPosition(5, 15)
        rectangles[i].style.height = size
    }
}

function repositionDot() {
    for (let i = 0; i < dots.length; i++) {
        if (Math.random() < 0.5) {
            dots[i].style.display = "block"
        } else {
            dots[i].style.display = "none"
        }
        dots[i].style.top = randomPosition(-25, 100)
        dots[i].style.left = randomPosition(-25, 100)
        dots[i].style.width = randomPosition(0.25, 0.5)
        dots[i].style.height = randomPosition(0.25, 0.5)
        dots[i].style.transform = "rotate(" + randomAngle(-180, 180) + ")"
    }
}

function repositionEverything(){
    repositionCross()
    repositionRectangle()
    repositionDot()
}

setInterval(repositionEverything, 100);