// arquivo boss well

function Bosswell(context, imagem) {
  //
  this.context = context;
  this.imagem = imagem;
  this.spritesheet =
  new Spritesheet(context, imagem, 1, 2);
  this.spritesheet.linha  = 0;
  this.spritesheet.coluna  = 0;
  this.spritesheet.intervalo = 100;
  this.x = 20;
  this.y = 40;
  
}

Bosswell.prototype = {
   //
   atualizar : function() {   

   },
   desenhar: function() {
	 //
     if ( this.x + (this.spritesheet.imagem.width / this.spritesheet.numColunas) > 500 )
	    this.x *=-1
     else
        this.x *= 1;  		 
	 
	  this.spritesheet.desenhar(this.x, this.y);
          this.spritesheet.proximoQuadro(); 
	   	  
   }



}






