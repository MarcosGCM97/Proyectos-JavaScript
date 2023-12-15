
const numCarga = document.querySelector('.numCarga')
let imagen = document.querySelector('.img')
let porcentaje = 0
let interval
let intervalBlur = 50

//animacion fondo
animacionBlur = [
    {filter: 'Blur(10px)'},
    {filter: 'Blur(0px)'}
]
animacionBlurTimming = {
    fill: 'forwards',
    iterations: 1,
    duration: 2000,
}


function carga(){
    porcentaje++
    intervalBlur = intervalBlur - 0.5

    numCarga.innerHTML = porcentaje + '%'
    imagen.style.filter = `Blur(${intervalBlur}px)`
    if(porcentaje === 100){
        clearInterval(interval)
        numCarga.style.display = 'none'
    }
}

window.addEventListener('load', function(){
    interval = this.setInterval(carga, 100)
})