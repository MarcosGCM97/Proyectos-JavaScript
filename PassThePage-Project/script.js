const numeros = document.querySelectorAll('.nums')
const spanBlue = document.querySelector('.spanBlue')
const spanBlue1 = document.querySelector('.spanBlue1')
const spanBlue2 = document.querySelector('.spanBlue2')
const btnPrev = document.querySelector('.Prev')
const btnNext = document.querySelector('.Next')

//animacion con javascript
const lineaAzul = [
    {   
        width: "0px",
    },
    {           
        width: "100px",
    }
]
const lineaAzulReversa = [
    {   
        width: "100px",
    },
    {           
        width: "0px",
    }
]
const lineaAzulTiempo = {
    duration: 500,
    iterations: 1,
    fill: 'forwards',
}

// boton next y prev
function botonNext(e){
    btn = e.target

    //boquear boton next
    if(numeros[3].classList.contains('numsBlue')){
        disabled = true
        if(disabled){
            btnNext.setAttribute('style','color: black; background: gray')
        }
    } else {
        disabled = false
        btnNext.removeAttribute('style','color: black; background: gray')
    }
     
    //agrega linea azul y circulo azul
    if(btn === btnNext & !numeros[1].classList.contains('numsBlue')){      
        spanBlue.animate(lineaAzul, lineaAzulTiempo)
        numeros[1].classList.add('numsBlue')
    } else if(btn === btnNext & !numeros[2].classList.contains('numsBlue')){      
        spanBlue1.animate(lineaAzul, lineaAzulTiempo)
        numeros[2].classList.add('numsBlue')
    } else if(btn === btnNext & !numeros[3].classList.contains('numsBlue')){      
        spanBlue2.animate(lineaAzul, lineaAzulTiempo)
        numeros[3].classList.add('numsBlue')
    }

}
function botonPrev(e){
    btn = e.target
    
    //boquear boton prev
    if(!numeros[1].classList.contains('numsBlue')){
        btnPrev.disabled = true
        btnPrev.setAttribute('style','color: black; background: gray')
    } else {
        btnPrev.disabled = false
        btnPrev.removeAttribute('style','color: black; background: gray')
    }

    if(btn === btnPrev 
        & numeros[1].classList.contains('numsBlue') 
        & !numeros[2].classList.contains('numsBlue') ){            
            spanBlue.animate(lineaAzulReversa, lineaAzulTiempo)
            numeros[1].classList.remove('numsBlue')
            console.log('h')
    } else if(btn === btnPrev 
        & numeros[2].classList.contains('numsBlue')
        & !numeros[3].classList.contains('numsBlue')){           
            spanBlue1.animate(lineaAzulReversa, lineaAzulTiempo)
            numeros[2].classList.remove('numsBlue')
    } else if(btn === btnPrev 
        & numeros[3].classList.contains('numsBlue')){           
            spanBlue2.animate(lineaAzulReversa, lineaAzulTiempo)
            numeros[3].classList.remove('numsBlue')
    }
}
document.addEventListener('click', botonNext)
document.addEventListener('click', botonPrev)