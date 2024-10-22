import {Gigante} from "./Gigante" ;
import {Mago} from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";



const miGigante:Gigante= new Gigante ("Fuerza Brutal", "Mormot");
miGigante.atacar();

miGigante.getnivel();


const miMago:Mago= new Mago("Super Hechizo", "Magius");
miMago.atacar();

const miLuchador:Luchador= new Luchador("Fuerza Bruta");
miLuchador.atacar();

const miArquero:Arquero= new Arquero ("Extrema Punteria");
miArquero.atacar();

