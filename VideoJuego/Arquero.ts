import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    protected nombre:string;
    constructor (habilidad:string, nombre:string){
        super (habilidad)
        this.nombre=nombre

    }
   



    public atacar():void  {
        console.log( "Ataque sigiloso")
        }




   
}