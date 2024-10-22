import {Gigante} from "./Gigante" ;
import {Mago} from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";
import { Personaje } from "./Personaje";



const miGigante:Personaje= new Gigante ("Fuerza Brutal", "Mormot");
miGigante.atacar();

const miMago:Personaje= new Mago("Super Hechizo", "Magius");
miMago.atacar();

const miLuchador:Personaje= new Luchador("Fuerza Bruta","luchin");
miLuchador.atacar();

const miArquero:Personaje=new Arquero ("Extrema Punteria", "Arquer");
miArquero.atacar();





