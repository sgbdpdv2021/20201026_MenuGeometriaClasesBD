export class Circulo{
    private _radio:number

    constructor(radio:number){
        this._radio = radio
    }

    get radio(){
        return this._radio
    }

    perimetro(){
        return 2*Math.PI*this._radio
    }

    area(){
        return Math.PI*(this._radio*this._radio)
    }

}
