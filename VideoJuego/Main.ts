import {Gigante} from "./Gigante" ;
import {Mago} from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";



const miGigante:Gigante= new Gigante ("Fuerza Brutal", "Mormot");
miGigante.atacar();
miGigante.gethabilidad();
miGigante.getnombre();


const miMago:Mago= new Mago("Super Hechizo", "Magius");
miMago.atacar();
miMago.getnombre();

const miLuchador:Luchador= new Luchador("Fuerza Bruta","Forzo");
miLuchador.atacar();
miLuchador.gethabilidad();

const miArquero:Arquero=new Arquero ("Extrema Punteria", "Arrow");
miArquero.atacar();






