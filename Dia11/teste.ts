import { Veiculo } from "./Veiculo";

let carroDoThiago: Veiculo = new Veiculo('preto', 'fusquinha', 5, true);
let carroDoIndio: Veiculo = new Veiculo('vermelho', 'S10', 4, true);

carroDoThiago.visualizar();
carroDoThiago.acelerar();