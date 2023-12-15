
const btnSearch = document.getElementById('btnSearch')
const textSearch = document.getElementById('textSearch')

let cont = 0
const animacionTextSearch = [
    {
        visibility: 'visible',
        width: '0px',
    },
    {
        visibility: 'visible',
        width: '150px',
    },
]
const animacionTextSearchReversa = [
    {
        visibility: 'visible',
        width: '150px',
    },
    {
        visibility: 'hidden',
        width: '0px',
    },
]

const animacionTextSearchTimming = {
    duration: 150,
    iterations: 1,
    fill: 'forwards',
}

btnSearch.addEventListener('click', ()=>{
    cont++

    if(btnSearch && cont%2 === 1){
        console.log(cont)
        textSearch.animate(animacionTextSearch, animacionTextSearchTimming)

    } else if(btnSearch && cont%2 === 0){

        textSearch.animate(animacionTextSearchReversa, animacionTextSearchTimming)
    }
})