import { Vehiculos } from "./Vehiculo";
import { Registro } from "./RegistroAutomotor";

const auto = new Vehiculos("Auto", "Toyota", 2021, "ABC 123");
const moto = new Vehiculos("Moto", "Yamaha", 2022, "DEF 456");
const camion = new Vehiculos("Camion", "Ford", 2023, "GHI 789");

const registro = new Registro([auto, moto]);




    registro.agregarVehiculo(camion);
    console.log(camion);
  

    console.log(registro.getlistaVehiculos());


 const vehiculoModificado = new Vehiculos("Moto", "Honda", 2023, "JKL 012");
    registro.modificarVehiculo(1, vehiculoModificado);
    console.log(registro.getlistaVehiculos());

registro.darBajaVehiculo(moto);
    console.log(registro.getlistaVehiculos());