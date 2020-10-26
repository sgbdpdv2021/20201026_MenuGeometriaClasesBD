import { menuPral, menuTriangulo } from './vistas/menu'
import { leerTeclado } from './vistas/lecturaTeclado'
import { Triangulo, Triangulos } from './model/Triangulo'
import { Cuadrado } from './model/Cuadrado'
import { Rectangulo } from './model/Rectangulo'
import { Circulo } from './model/Circulo'
import { connect, disconnect } from './database/database'

const main = async () => {
    let n: number
    let query: any
    do {
        n = await menuPral()
        switch(n){
            case 1:
                console.log('Calculando perímetro y área de un TRIÁNGULO')

                let nombre: string, base: number, altura: number, lado1: number, lado2: number
                let triangulo: Triangulo

                nombre = await leerTeclado('Introduzca el nombre único del triángulo')
                base =  parseInt( await leerTeclado('Introduzca la base del triángulo'))
                altura =  parseInt( await leerTeclado('Introduzca la altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Introduzca el último lado del triángulo'))

                triangulo = new Triangulo(nombre, base, lado1, lado2)
                triangulo.altura = altura

                console.log(`Perímetro del triángulo= ${triangulo.perimetro()} cm`)
                console.log(`Área del triángulo= ${triangulo.area()} cm2`)

                break
            case 2:
                console.log('Calculando perímetro y área de un CUADRADO')
                let lado:number
                lado = parseInt(await leerTeclado('Introduzca el lado del cuadrado'))
                let cuadrado = new Cuadrado(lado)
                console.log("Perímetro del cuadrado="+cuadrado.perimetro())
                console.log("Área del cuadrado="+cuadrado.area())
                break
            case 3:
                console.log('Calculando perímetro y área de un CÍRCULO')
                let radio:number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo'))
                let circulo = new Circulo(radio)
                console.log("Perímetro del círculo="+circulo.perimetro())
                console.log("Área del círculo="+circulo.area())
                break
            case 4:
                console.log('Calculando perímetro y área de un RECTÁGULO')
                let baser, alturar:number
                baser = parseInt(await leerTeclado('Introduzca la base del rectángulo'))
                alturar = parseInt(await leerTeclado('Introduzca la altura del rectángulo'))
                let rectangulo = new Rectangulo(baser,alturar)
                console.log("Perímetro del rectángulo="+ rectangulo.perimetro())
                console.log("Área del rectángulo="+ rectangulo.area())
                break

            case 5:
                console.log('TRIÁNGULOV2')
                let nv2: number
                let nombrev2: string, basev2: number, alturav2: number, lado1v2: number, lado2v2: number
                let triangulov2: Triangulo = new Triangulo("",0,0,0)

                do {
                    nv2 = await menuTriangulo()
                    switch(nv2){
                        case 1:
                            nombrev2 = await leerTeclado('Introduzca el nombre único del triángulo')
                            basev2 =  parseInt( await leerTeclado('Introduzca la base del triángulo'))
                            alturav2 =  parseInt( await leerTeclado('Introduzca la altura del triángulo'))
                            lado1v2 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                            lado2v2 =  parseInt( await leerTeclado('Introduzca el último lado del triángulo'))
                            triangulov2 = new Triangulo(nombrev2, basev2, lado1v2, lado2v2)
                            /*
                                Invocamos al método altura
                                si salta la excepción nos vamos a la 
                                parte del catch.
                                En este caso comunicamos el error
                                e inicializamos el triángulo 
                            */
                            try {
                                triangulov2.altura = alturav2
                            }catch(error){
                                console.log(error)
                                triangulov2 = new Triangulo("",0,0,0)
                            }
                            break
                        case 2:
                            /*
                            Invocamos al método area
                            si no salta la excepción (throw)
                            mostramos el área
                            en otro caso damos el mensaje correspondiente

                            */

                            try{
                                let area = triangulov2.area()
                                console.log(`Área del triángulo= ${area} cm2`)
                            }catch (e){
                                console.log("No ha entrado en la opción 1: " + e)
                            }
                            break
                        case 3:
                            try{
                                let perimetro = triangulov2.perimetro()
                                console.log(`Perímetro del triángulo= ${perimetro} cm`)
                            }catch (e){
                                console.log("No ha entrado en la opción 1: " + e)
                            }
                            
                            
                            break
                        case 4:
                            alturav2 =  parseInt( await leerTeclado('Introduzca la altura del triángulo'))
                            triangulov2.altura = alturav2
                            break
                        case 5:
                            await connect()
                            // Crear el doc Schema y objeto Schema a partir del objeto
                            // salvarlo
                            const dSchema = {
                                _nombre: triangulov2.nombre,
                                _base: triangulov2.base,
                                _lado2: triangulov2.lado2,
                                _lado3: triangulov2.lado3,
                                _altura: triangulov2.altura
                            }
                            const oSchema = new Triangulos(dSchema)
                            await oSchema.save()
                            await disconnect()
                            break
                        case 6:
                            await connect()
                            nombrev2 = await leerTeclado('Introduzca el nombre único del triángulo')
                            // El find 
                            // Importante no olvidar el await, en otro caso no espera
                            query = await Triangulos.findOne( {_nombre: nombrev2} )
                            // Crear el doc Schema y objeto Schema a partir del objeto
                            // salvarlo
                            console.log(query)

                            triangulov2 = 
                               new Triangulo(query._nombre, query._base, query._lado2, query._lado3)
                            triangulov2.altura = query._altura    
                            
                            await disconnect()
                            break
                        case 7:
                            await connect()


                            const nuevo = await Triangulos.findOneAndUpdate( 
                                { _nombre: triangulov2.nombre }, 
                                {
                                    _nombre: triangulov2.nombre,
                                    _base: triangulov2.base,
                                    _lado2: triangulov2.lado2,
                                    _lado3: triangulov2.lado3,
                                    _altura: triangulov2.altura
                                },
                                {new: true}  // para que devuelva el objeto nuevo, actualizado
                                )
                            console.log(nuevo)
                            
                            await disconnect()
                            break
                        case 0:
                            console.log('\n--ADIÓS--')
                            break
                        default:
                            console.log("Opción incorrecta")
                            break
                    }
                }while (nv2 != 0)
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()