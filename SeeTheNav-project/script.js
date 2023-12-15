const carta = document.querySelector('.carta')
const nav = document.querySelector('.nav')
const circuloMenu = document.querySelector('.menuYX')
const btnMenu = document.querySelector('.bx-menu')
const btnX = document.querySelector('.bx-x')
const botonesNav = document.querySelectorAll('button')

//animacion rotar de la carta
const animacionCarta = [
    {
        transform: 'rotate(0deg)',
        transformOrigin: 'top left',
    },
    {
        transform: 'rotate(-20deg)',
        transformOrigin: 'top left',
    }

]
const animacionCartaCerrar = [
    {
        transform: 'rotate(-20deg)',
        transformOrigin: 'top left',
    },
    {
        transform: 'rotate(0deg)',
        transformOrigin: 'top left',
    }

]
const animacionCartaTimming = {
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
}
//animacion rotar del circulo del menu
const animacionMenu = [
    {
        transform: 'rotate(0deg)',
        transformOrigin: 'center',
    },
    {
        transform: 'rotate(-110deg)',
        transformOrigin: 'center',
    }

]
const animacionMenuCerrar = [
    {
        transform: 'rotate(-110deg)',
        transformOrigin: 'center',
    },
    {
        transform: 'rotate(0deg)',
        transformOrigin: 'center',
    }

]
const animacionMenuTimming = {
    duration: 1000,
    iterations: 1,
    fill: 'forwards'
}

//animacion de los botones del nav
const animacionBtnNav1 = [
    {left: '-140px'},
    {left: '20px'}
]
const animacionBtnNav2 = [
    {left: '-140px'},
    {left: '40px'}
]
const animacionBtnNav3 = [
    {left: '-140px'},
    {left: '60px'}
]
const animacionBtnNav1Reverse = [
    {left: '20px'},
    {left: '-140px'}
]
const animacionBtnNav2Reverse = [
    {left: '40px'},
    {left: '-140px'}
]
const animacionBtnNav3Reverse = [
    {left: '60px'},
    {left: '-140px'}
]

const animacionBtnNavTimming = {
    fill: 'forwards',
    duration: 1000,
    iterations: 1,
    easing: 'ease-in'
}
const animacionBtnNavTimmingReverse = {
    fill: 'forwards',
    duration: 1000,
    iterations: 1,
    easing: 'ease-in-out'
}

//funcion que activa las animaciones del boton 'bx-menu'
function rotarCartaAbrir(e){
    const btn = e.target

    if(btn === btnMenu){
        carta.animate(animacionCarta, animacionCartaTimming)
        circuloMenu.animate(animacionMenu,animacionMenuTimming)
        botonesNav[0].animate(animacionBtnNav1, animacionBtnNavTimming)
        botonesNav[1].animate(animacionBtnNav2, animacionBtnNavTimming)
        botonesNav[2].animate(animacionBtnNav3, animacionBtnNavTimming)
    }
}

//funcion que activa las animaciones del boton 'bx-x'
function rotarCartaCerrar(e){
    const btn = e.target

    if(btn === btnX){
        carta.animate(animacionCartaCerrar, animacionCartaTimming)
        circuloMenu.animate(animacionMenuCerrar, animacionMenuTimming)
        botonesNav[0].animate(animacionBtnNav1Reverse, animacionBtnNavTimmingReverse)
        botonesNav[1].animate(animacionBtnNav2Reverse, animacionBtnNavTimmingReverse)
        botonesNav[2].animate(animacionBtnNav3Reverse, animacionBtnNavTimmingReverse)
    }4}

document.addEventListener('click', rotarCartaAbrir)
document.addEventListener('click', rotarCartaCerrar)

