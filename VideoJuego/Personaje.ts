export abstract class Personaje {
    protected habilidad:string;
    protected nivel:number;
    protected puntosDeVida: number;
    protected mana:number;

constructor (habilidad:string){
    this.habilidad=habilidad;
    this.nivel=1;
    this.puntosDeVida=100;
    this.mana=0;

}

gethabilidad(): string {
    return this.habilidad;
}

getnivel():number{
    return this.nivel;
}

getpuntosDeVida(){
    return this.puntosDeVida;
}

getmana(){
     return this.mana ;
}

sethabilidad (nuevaHabilidad:string):void{
    this.habilidad=nuevaHabilidad
}

setnivel (nuevoNivel:number):void{
    if (this.nivel ==1 && this.nivel< 100)
    this.nivel=nuevoNivel
}

setpuntosDeVida (puntosDeVida:number):void{
    if (this.puntosDeVida>0 && this.puntosDeVida<100)
    this.puntosDeVida=puntosDeVida
}

setmana (mana:number):void{
    if (this.mana==0 && this.mana<100)
    this.mana=mana
}

public moverse():void{
    return console.log(" El personaje se esta moviendo")
} 


abstract atacar():void

public bloquear(){
console.log("El personaje ah bloqueado el ataque")
}

public sanar() {
console.log( " El personaje se esta regenerando");
}

    
}