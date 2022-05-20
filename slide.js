let time = 5000
let currentImageIndex = 0
let images = document.querySelectorAll("#slider img")
let max = images.length; // coloca todas as imagens em na váriavel max

function nextImage(){
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    images[currentImageIndex].classList.add("selected")
}


function start(){
    setInterval(nextImage, time)
}

// executa função quando a página for carregada
window.addEventListener("load", start)