// arquivo: spritesheet

function Spritesheet(context, imagem, linhas, colunas) {
   this.context = context;
   this.imagem = imagem;
   this.numLinhas = linhas;
   this.numColunas = colunas;
   this.intervalo = 0;
   this.linha = 0;
   this.coluna = 0;
   this.ultimoTempo = 0;
   this.fimDoCiclo = null;
}

Spritesheet.prototype = {  
   proximoQuadro: function() {
      
	  var agora = new Date().getTime();
	  
	  if (!this.ultimoTempo)
	     this.ultimoTempo = agora;
		 
	  if (agora - this.ultimoTempo < this.intervalo) 	 
	     return;
		
      if (this.coluna < this.numColunas -1){
	      this.coluna++;
	  }
	  else  {
          this.coluna = 0;	
	  
      if (this.fimDoCiclo) this.fimDoCiclo();
	  }	  

      this.ultimoTempo = agora;		  
   
   },
   
   desenhar: function(x, y) {
     var larguraQuadro = this.imagem.width / this.numColunas;
	 var alturaQuadro = this.imagem.height / this.numLinhas;
	 
	 this.context.drawImage(
	    this.imagem,
		larguraQuadro * this.coluna,
		alturaQuadro * this.linha,
		larguraQuadro,
		alturaQuadro,
		x,
		y,
		larguraQuadro,
		alturaQuadro
	 );
	
	 
   }

}