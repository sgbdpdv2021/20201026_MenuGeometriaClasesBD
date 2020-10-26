export class Rectangulo{
    private _base: number
    private _altura:number

    constructor(base : number, altura:number){
        this._base = base
        this._altura = altura
    }

    get base(){
        return this._base
    }

    get altura(){
        return this._altura
    }

    perimetro = () => this._base * 2 + this._altura * 2
    
    area = () => this._base * this._altura

}
