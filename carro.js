/* Classe do objeto Carro */

function Carro(cor, velocMaxima) {
   this.cor = cor;
   this.velocMaxima = velocMaxima;
   this.velocAtual = 0;
   }
    
Carro.prototype = {
	acelerar: function() {
	  this.velocAtual += 10;
		
	}	
}