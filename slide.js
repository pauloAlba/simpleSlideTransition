let time = 4000
let currentImageIndex = 0

let images = document.querySelectorAll("#slider img")
let max = images.length; // coloca todas as imagens em na váriavel max
let previous = document.getElementById("previous")
let next = document.getElementById("next")

function setSlide(newIndex) {
    images[newIndex].classList.add("selected")
}

function removeSlide(currentImageIndex) {
    images[currentImageIndex].classList.remove("selected")
}
function nextImage() {
    removeSlide(currentImageIndex)
    currentImageIndex++
    if (currentImageIndex >= max) {
        currentImageIndex = 0
    }
    setSlide(currentImageIndex)
}


function createInterval() {

    let interval = setInterval(() => {
        nextImage()
    }, time);
    return interval
}
function start() {
    let interval = createInterval()

    previous.addEventListener('click', event => {
        event.stopPropagation();
        clearInterval(interval)


        removeSlide(currentImageIndex)
        currentImageIndex--
        if (currentImageIndex < 0) currentImageIndex = max - 1

        setSlide(currentImageIndex)
        interval = createInterval()

    })

    next.addEventListener('click', event => {
        event.stopPropagation();
        clearInterval(interval)
        removeSlide(currentImageIndex)
        currentImageIndex++
        if (currentImageIndex >= max) currentImageIndex = 0
        setSlide(currentImageIndex)
        interval = createInterval()
    })
}

// executa função quando a página for carregada
window.addEventListener("load", start)
