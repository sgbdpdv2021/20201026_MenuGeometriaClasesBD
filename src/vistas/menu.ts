import { leerTeclado } from '../vistas/lecturaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- TRIÁNGULO')
    console.log('2.- CUADRADO')
    console.log('3.- CÍRCULO')
    console.log('4.- RECTÁNGULO')
    console.log('5.- TRIÁNGULOV2')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

export const menuTriangulo = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Crear TRIÁNGULO')
    console.log('2.- Área')
    console.log('3.- Perímetro')
    console.log('4.- Cambiar altura')
    console.log('5.- Salvar en BD')
    console.log('6.- Cargar Triángulo de la BD')
    console.log('7.- Modificar Triángulo de la BD')
    console.log('0.- SALIR')
    n = parseInt( await leerTeclado('--OPCIÓN--') )
    return n
}

