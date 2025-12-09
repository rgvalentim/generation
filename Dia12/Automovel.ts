import { Terrestre } from "./Terrestre";

export class Automovel extends Terrestre {
   private _cor: string;
   private _numeroDePortas: number;
   private _placa: string;
   private _marcha: number;

   constructor(capacidade: number,
      numeroDeRodas: number, velocidade: number, cor: string, numeroDePortas: number,
      placa: string, marcha: number){
         super(capacidade, numeroDeRodas, velocidade)
         this._cor = cor;
         this._numeroDePortas = numeroDePortas;
         this._placa = placa;
         this._marcha = marcha;
      }

   //get e set
   public get cor(): string{
      return this._cor;
   }

   public set cor(cor: string){
      this._cor = cor
   }

   public get numeroDePortas(): number{
      return this._numeroDePortas;
   }

   public set numeroDePortas(numeroDePortas: number){
      this._numeroDePortas = numeroDePortas
   }

   public get placa() {
		return this._placa;
	}

	public set placa(placa: string) {
		this._placa = placa;
	}
	
	public get marcha() {
		return this._marcha;
	}

	public set marcha(marcha: number) {
		this._marcha = marcha;
	}

   visualizar(){
      super.visualizar();
      console.log("Cor do veiculo: " + this._cor);
      console.log("Numero de portas: " + this._numeroDePortas);
      console.log("Numero da placa: " + this._placa);
      console.log("Quantidade de marchas: " +  this._marcha);
      
      
      
      
   }

}