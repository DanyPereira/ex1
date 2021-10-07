
var ValorDesconto = parseFloat(ValorDesconto)
var ValorFinal =parseFloat(ValorFinal)

Produto = prompt("Digite o nome do produto")
ValorProd = prompt("Digite valor do produto")
ValorProd = parseFloat(ValorProd)

if (ValorProd >=100 && ValorProd <= 200) {

      ValorDesconto = (ValorProd * 5) /100
      ValorFinal = (ValorProd - ValorDesconto)
      alert ("O produto é:  " + Produto + " \n o valor é:   " + ValorProd + " \n o desconto é:  " +  ValorDesconto + "\n o valor final é:  " + ValorFinal)
 }
 
  else if (ValorProd >200 && ValorProd <= 250) {
       ValorDesconto = (ValorProd * 10) /100
       ValorFinal = (ValorProd - ValorDesconto)
        alert ("O produto é:  " + Produto + " \n o valor é:   " + ValorProd + " \n o desconto é:  " +  ValorDesconto + "\n o valor final é:  " + ValorFinal)
 }
 
 else if (ValorProd > 250) {
      ValorDesconto = (ValorProd * 15) /100
      ValorFinal = (ValorProd - ValorDesconto)
       alert ("O produto é:  " + Produto + " \n o valor é:   " + ValorProd + " \n o desconto é:  " +  ValorDesconto + "\n o valor final é:  " + ValorFinal)
 }
 
 else if (ValorProd < 100) {
       alert ("O produto é:   " + Produto + " \n o valor é:   " + ValorProd + "   e não terá desconto")
 }
 
 
