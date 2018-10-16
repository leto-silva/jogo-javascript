// arquivo painel

function Painel(context, nave){
  //
  this.context = context;
  this.nave = nave;
  this.spritesheet =
    new Spritesheet(context, nave.imagem, 3, 2);
  this.spritesheet.linha  = 0;
  this.spritesheet.coluna = 0;
  this.pontuacao = 0; 
  this.contadorTempo = 100;  
  
}

Painel.prototype = {
   atualizar: function() {
	 //
     this.contador();	 
	   
   },
   desenhar: function() {
	  var x = 20;
	  var y = 20;
	  
	  // reduzir escala
	  this.context.scale( 0.5, 0.5);
	  
	  for (var i = 1; i <= this.nave.vidasExtras; i++) {
          this.spritesheet.desenhar(x, y);
		  x += 40;
	  }	 
	   
	  // tornar a dobrar
      this.context.scale( 2, 2);
 	 
	  var ctx = this.context;
	 
	  ctx.save();
	  ctx.fillStyle = 'yellow';
      ctx.font = '18px sans-serif';
	  ctx.fillText(this.pontuacao, 100, 27);
	  ctx.fillText(this.contadorTempo, 400, 27);
	  
	  ctx.restore();
	   
   },
   
   contador: function() {
     if (this.contadorTempo != 0){
		 this.contadorTempo -= 1;
		 setTimeout( this.contador(), 1000);
	 }
   }

	
}