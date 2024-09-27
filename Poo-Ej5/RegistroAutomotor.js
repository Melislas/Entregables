"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro(listavehiculos) {
        this.listaVehiculos = [];
        if (listavehiculos) {
            this.listaVehiculos = listavehiculos;
        }
    }
    Registro.prototype.getlistaVehiculos = function () {
        return this.listaVehiculos;
    };
    Registro.prototype.agregarVehiculo = function (nuevoVehiculo) {
        this.listaVehiculos.push(nuevoVehiculo);
    };
    Registro.prototype.modificarVehiculo = function (indice, vehiculoModificado) {
        if (indice >= 0 && indice < this.listaVehiculos.length) {
            this.listaVehiculos[indice] = vehiculoModificado;
        }
        else {
            throw new Error("indice incorrecto");
        }
    };
    Registro.prototype.darBajaVehiculo = function (vehiculoBaja) {
        this.listaVehiculos = this.listaVehiculos.filter(function (vehiculo) { return vehiculo !== vehiculoBaja; });
    };
    return Registro;
}());
exports.Registro = Registro;
