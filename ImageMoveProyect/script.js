
const figure = document.querySelector('figure')
const divImg = figure.querySelectorAll('.divImg')


function animarDiv(e){

    const img = e.target;
    const divPadre = img.parentNode

    if(!divPadre.classList.contains('verDiv')){
        divPadre.classList.add('verDiv')
        divPadre.classList.remove('noVerDiv')    
    } 
    
    for (let otroDiv of divImg) {
        if (otroDiv !== divPadre & otroDiv.classList.contains('verDiv')) {
        otroDiv.classList.remove("verDiv");
        otroDiv.classList.add("noVerDiv");
        }
    }
}

figure.addEventListener('click', animarDiv)