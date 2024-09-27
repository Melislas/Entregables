"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vehiculo_1 = require("./Vehiculo");
var RegistroAutomotor_1 = require("../RegistroAutomotor");
var auto = new Vehiculo_1.Vehiculos("Auto", "Toyota", 2021, "ABC 123");
var moto = new Vehiculo_1.Vehiculos("Moto", "Yamaha", 2022, "DEF 456");
var camion = new Vehiculo_1.Vehiculos("Camion", "Ford", 2023, "GHI 789");
var registro = new RegistroAutomotor_1.Registro([auto, moto]);
registro.agregarVehiculo(camion);
console.log(camion);
console.log("Lista de vehículos:", registro.getlistaVehiculos());
// Modificar un vehículo
try {
    var vehiculoModificado = new Vehiculo_1.Vehiculos("Moto", "Honda", 2023, "JKL 012");
    registro.modificarVehiculo(1, vehiculoModificado);
    console.log("Vehículo modificado:", registro.getlistaVehiculos());
}
catch (error) {
    console.error(error.message);
}
// Dar de baja un vehículo
try {
    registro.darBajaVehiculo(moto);
    console.log("Lista de vehículos después de dar de baja:", registro.getlistaVehiculos());
}
catch (error) {
    console.error(error.message);
}
