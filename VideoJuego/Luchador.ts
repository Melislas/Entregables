import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
        protected nombre:string;
        constructor (habilidad:string, nombre:string){
            super (habilidad)
            this.nombre=nombre
    
        }
   
        getnombre():string{
            return this.nombre
        
        }


    public atacar():void  {
        console.log( "Ataque cuerpo a cuerpo")
        }





}