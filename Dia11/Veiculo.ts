//Criar uma classe para representar veículo

export class Veiculo {
   //atributos
   private _cor: string;
   private _modelo: string;
   private _rodas: number;
   private _buzina: boolean;

   //metodos

   //obrigatorio
   constructor(cor: string, modelo: string, rodas: number, buzina: boolean) {
      this._cor = cor;
      this._modelo = modelo;
      this._rodas = rodas;
      this._buzina = buzina;
   }

   //métodos de Get e Set
   public get cor(): string{
      return this._cor;
   }

   public set cor(cor: string){
      this._cor = cor;
   }

   public get modelo(): string{
      return this._modelo;
   }

   public set modelo(modelo: string){
      this._modelo
   }

   buzinar(): void{
      console.log("Bi bi");
   }

   acelerar(): void {
      console.log("Acelerou");
      
   }

   visualizar(): void{
      console.log("Cor do veículo: ", this._cor);
      console.log("Modelo do veiculo: ", this._modelo);
      console.log("Vai com cuidado.");
      
      
   }


}