export class Cuadrado{
    private _lado: number

    constructor(lado : number){
        this._lado = lado
    }

    get lado(){
        return this._lado
    }

    perimetro(){
        return this._lado*4
    }

    area(){
        return (this._lado*this._lado)
    }

}
