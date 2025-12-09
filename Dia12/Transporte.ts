export abstract class Transporte {
   //atributos
   private _capacidade: number;

   //metodo construtor
   constructor(capacidade: number){
      this._capacidade = capacidade
   }

   //get e set
   public get capacidade(): number{
      return this._capacidade;
   }

   public set capacidade(capacidade: number){
      this._capacidade = capacidade
   }

   //metodo especifico
   visualizar(): void{
      console.log("*************************");
      console.log("Dados do transporte");      
      console.log("*************************");
      console.log("Capacidade maxima: " + this._capacidade);      
   }
}