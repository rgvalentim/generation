import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

//instanciar um objeto
//onst transporte: Transporte = new Transporte(5) //comeca a dar erro depois de adicionar a palavra abstrata

const terrestre: Terrestre = new Terrestre(5, 4, 250)

const automovel: Automovel = new Automovel(5, 4, 180, "roxo", 4, "EBN-0301", 0)

//transporte.visualizar();
console.log("\n\n");
terrestre.visualizar();
console.log("\n\n");
automovel.visualizar();
