"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
var Vehiculos = /** @class */ (function () {
    function Vehiculos(tipoVehiculo, marcaVehiculo, modeloVehiculo, patenteVehiculo) {
        if (tipoVehiculo == undefined && marcaVehiculo == undefined && patenteVehiculo == undefined) {
            console.log(" Los valores son obligatorios");
        }
        this.tipo = tipoVehiculo;
        this.marca = marcaVehiculo;
        this.modelo = modeloVehiculo;
        this.patente = patenteVehiculo;
    }
    Vehiculos.prototype.gettipo = function () {
        return this.tipo;
    };
    Vehiculos.prototype.getmarca = function () {
        return this.marca;
    };
    Vehiculos.prototype.getmodelo = function () {
        return this.modelo;
    };
    Vehiculos.prototype.getpatente = function () {
        return this.patente;
    };
    Vehiculos.prototype.settipo = function (nuevoTipo) {
        if (nuevoTipo == undefined) {
            console.log(" este valor no puede estar vacio");
        }
        this.tipo = nuevoTipo;
    };
    Vehiculos.prototype.setmarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Vehiculos.prototype.setmodelo = function (nuevoModelo) {
        if (nuevoModelo > 0) {
            console.log(" Debe ser un valor positivo");
        }
        this.modelo = nuevoModelo;
    };
    Vehiculos.prototype.setpatente = function (nuevaPatente) {
        this.patente = nuevaPatente;
    };
    return Vehiculos;
}());
exports.Vehiculos = Vehiculos;
var Auto = new Vehiculos("Auto", "Toyota", 2021, "ABC 123");
var Moto = new Vehiculos("Moto", "Yamaha", 2022, "DEF 456");
var Camion = new Vehiculos("Camion", "Ford", 2023, "GHI 789");
console.log(Auto);
console.log(Moto);
console.log(Camion);
