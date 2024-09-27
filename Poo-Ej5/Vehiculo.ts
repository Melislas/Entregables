export class Vehiculos {
    private tipo:string;
    private marca:string;
    private modelo: number;
    private patente: string;

constructor (tipoVehiculo:string,marcaVehiculo:string,modeloVehiculo:number,patenteVehiculo:string){
    if (tipoVehiculo == undefined && marcaVehiculo == undefined && patenteVehiculo ==undefined) {
        console.log( " Los valores son obligatorios");
        }
    this.tipo=tipoVehiculo;
    this.marca=marcaVehiculo;
    this.modelo=modeloVehiculo;
    this.patente=patenteVehiculo
}

public gettipo():string {
    return this.tipo
}

public getmarca():string{
    return this.marca
}

public getmodelo():number{
    return this.modelo
}

public getpatente():string {
    return this.patente
}

public settipo (nuevoTipo:string): void {
    if (nuevoTipo == undefined) {
        console.log( " este valor no puede estar vacio");
        
    }
    this.tipo=nuevoTipo
}

public setmarca (nuevaMarca:string): void {
    this.marca=nuevaMarca
}

public setmodelo (nuevoModelo:number): void {
    if (nuevoModelo > 0 ){
        console.log( " Debe ser un valor positivo");
        
    }
    this.modelo=nuevoModelo
}

public setpatente (nuevaPatente:string): void {
    this.patente=nuevaPatente
}


}



