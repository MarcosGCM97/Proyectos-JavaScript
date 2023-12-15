const div = document.querySelectorAll('div')
const body = document.querySelector('body')

let bodyBottons = body.lastChild.offsetHeight

window.addEventListener('scroll', function(){
    let screenSize = window.innerHeight

    for(let i = 0; i < div.length; i++){

        if(div[i].getBoundingClientRect().top < screenSize && i%2 === 0){
            div[i].classList.add('moveToLeft')
        } else {
            div[i].classList.remove('moveToLeft')
        }

        if(div[i].getBoundingClientRect().top < screenSize && i%2 === 1){
            div[i].classList.add('moveToRight')
        } else {
            div[i].classList.remove('moveToRight')
        }

    }
})