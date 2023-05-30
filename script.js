const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const BotonBorrarTodo = document.querySelector('[data-borrar-todo]')
const BotonBorrar = document.querySelector('[data-borrar]')
const BotonIgual = document.querySelector('[data-igual]')
const textoSuperior = document.querySelector('[data-valor-superior]')
const textoInferior = document.querySelector('[data-valor-inferior]')


class Calculadora {
    constructor(textoSuperior,textoInferior){
        this.textoInferior = textoInferior
        this.textoSuperior = textoSuperior
        this.valorInferior= ''
        this.valorSuperior = ''
        this.operador = undefined 
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorInferior.includes('.'))return
        this.valorInferior = this.valorInferior + numero
    }
    imprimirDisplay(){
        this.textoInferior.innerText = this.valorInferior
        this.textoSuperior.innerText = this.valorSuperior
    }
    borrar(){
        this.valorInferior = this.valorInferior.slice(0,-1)
    }
    elegirOperacion(operador){
        if(this.valorInferior = '') return
        if(this.valorSuperior != ''){
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }
    realizarCalculo(){
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat(this.valorInferior)

        switch(this.operador){
            case '+':
                resultado = conversionValorSuperior + conversionValorInferior
                break
            case '-':
                resultado = conversionValorSuperior - conversionValorInferior
                break
            case '*':
                resultado = conversionValorSuperior * conversionValorInferior
                break
            case '/':
                resultado = conversionValorSuperior / conversionValorInferior
                break
            default: return    
            }
        
            this.valorInferior = resultado
            this.operador = undefined
            this.valorSuperior = ''
    }


    limpiarPantalla(){
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

}


const calculadora = new Calculadora(textoSuperior,textoInferior)



botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

BotonBorrar.addEventListener('click', () =>{
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

BotonIgual.addEventListener('click', () =>{
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})

BotonBorrarTodo.addEventListener('click', () =>{
    calculadora.limpiarPantalla()
    calculadora.imprimirDisplay()
})