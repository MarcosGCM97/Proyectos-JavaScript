const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const botonEnter = document.querySelector('#enter');

const check = 'bx-check-circle'
const unCheck = 'bx-radio-circle'
const lineTrhrough = 'line-through'
let id
let LIST




//creacion de fecha
const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday:'long',month:'short',day:'numeric'})



//funcion agregar tarea
function agregarTarea(tarea,id,realizado,eliminado) {

    if(eliminado){return}

    const REALIZADO = realizado ?check :unCheck
    const LINE = realizado?lineTrhrough :''
    
    let Fecha = fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday:'long',month:'short',day:'numeric'}) 

    const elemento = ` <li id='elemento'>
                        <i class='bx ${REALIZADO}' data="realizado" id="${id}"></i>
                        <p class="text ${LINE}">${tarea}/</p>
                        <p class="text ${LINE}">/${Fecha}</p>
                        <i class='bx bxs-trash' data="eliminado" id="${id}"></i>
                        </li>`
    
    lista.insertAdjacentHTML('beforeend', elemento)

}

//funcion tarea realizada
function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(unCheck)
    element.parentNode.querySelector('.text').classList.toggle(lineTrhrough)
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true
}

//funcion de tarea eliminada
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
}





botonEnter.addEventListener('click', ()=>{
    const tarea = input.value 
    if (tarea) {
        agregarTarea(tarea,id,false,false)
        LIST.push({
            nombre: tarea,
            id:id,
            realizado:false,
            eliminado:false
        })
    }
    localStorage.setItem('ToDo',JSON.stringify(LIST))
    input.value =''
    id++
})


document.addEventListener('keyup', function(event) {
    if(event.key=='Enter'){
        const tarea = input.value;
        if (tarea) {
            agregarTarea(tarea,id,false,false)
            LIST.push({
                nombre: tarea,
                id:id,
                realizado:false,
                eliminado:false
            })
        }
        localStorage.setItem('ToDo',JSON.stringify(LIST))
    input.value=''
    id++
    }
})

lista.addEventListener('click',function(event){
    const element = event.target
    const elementData = element.attributes.data.value

    if(elementData === 'realizado'){
        tareaRealizada(element)
    }
    else if(elementData === 'eliminado'){
        tareaEliminada(element)
    }
    localStorage.setItem('ToDo',JSON.stringify(LIST))
})



//local storage get item
let data = localStorage.getItem('ToDo')
if(data){
    LIST=JSON.parse(data)
    id = LIST.length
    cargarLista(LIST)
} else {
    LIST = []
    id=0
}

function cargarLista(DATA){
    DATA.forEach(function(i){
        agregarTarea(i.nombre, i.id, i.realizado, i.eliminado)

    })
}