const divFood = document.querySelector('.divFood')
const divDesert = document.querySelector('.divDesert')
const body = document.querySelector('body')

const animacionDivFood = [
    {gridTemplateColumns: '70% 30%',color: 'rgb(230, 230, 76)'},
]
const animacionDivDesert = [
    {gridTemplateColumns: '30% 70%',color: 'rgb(132, 230, 76)'},
]
const animacionDiv = [
    {gridTemplateColumns: '50% 50%',color: 'black'},
]

const animacionDivTimming ={ 
    fill: 'forwards',
    iterations: 1,
    duration: 2000,
}
document.addEventListener('mouseover', (e) =>{
    div = e.target

    if(div === divFood){
        body.animate(animacionDivFood, animacionDivTimming)
    } else if(div === divDesert){
        body.animate(animacionDivDesert, animacionDivTimming)
    }
})

document.addEventListener('mouseout', ()=>{
    body.animate(animacionDiv,animacionDivTimming)
})