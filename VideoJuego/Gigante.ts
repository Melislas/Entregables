import { Personaje } from "./Personaje";

export class Gigante extends Personaje{
    protected nombre:string

   constructor(habilidad:string, nombre:string){
        super (habilidad)
    this.nombre=nombre;
    }

  getnombre():string{
    return this.nombre

}

   
 public atacar():void  {
        console.log( "Golpe Aplastante")
        }


}