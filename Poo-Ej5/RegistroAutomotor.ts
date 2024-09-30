import { Vehiculos } from "./Vehiculo";

export class Registro {
    private listaVehiculos:Vehiculos[];



constructor(listavehiculos: Vehiculos[]) {
    this.listaVehiculos = []; 
    if (listavehiculos) {
        this.listaVehiculos = listavehiculos; 
    }
}

public getlistaVehiculos(): Vehiculos[]{
   return this.listaVehiculos;

}


public agregarVehiculo(nuevoVehiculo:Vehiculos): void{
    this.listaVehiculos.push (nuevoVehiculo)
}

public modificarVehiculo(indice: number, vehiculoModificado: Vehiculos): void {
    if (indice >= 0 && indice < this.listaVehiculos.length) {
        this.listaVehiculos[indice] = vehiculoModificado;
    } else {
        throw new Error("indice incorrecto");
    }
}

// public darBajaVehiculo(vehiculoBaja:Vehiculos):void {
// this.listaVehiculos= this.listaVehiculos.filter (vehiculo => vehiculo !== vehiculoBaja)

// }

public darBajaVehiculo(vehiculoBaja: Vehiculos): void {
    this.listaVehiculos = this.listaVehiculos.filter(vehiculo => vehiculo.patente !== vehiculoBaja.patente);
}


}



