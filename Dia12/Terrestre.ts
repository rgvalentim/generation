import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {
   //atributos
   private _numeroDeRodas: number;
   private _velocidade: number;

   //construtor
   constructor(capacidade: number, numeroDeRodas: number, velocidade:number){
      super(capacidade);
      this._numeroDeRodas = numeroDeRodas;
      this._velocidade = velocidade;
   }

   //get e set
   public get numeroDeRodas(): number{
      return this._numeroDeRodas;
   }

   public set numeroDeRodas(numeroDeRodas: number){
      this._numeroDeRodas = numeroDeRodas
   }

   public get velocidade(): number{
      return this._velocidade;
   }

   public set velocidade(velocidade: number){
      this._velocidade = velocidade
   }

   //metodo especifico
   visualizar(): void{
      super.visualizar(); //polimorfismo
      console.log("Numero de rodas: " + this._numeroDeRodas);
      console.log("Velocidade maxima: " + this._velocidade);
      
      
   }

}