// sección jQuery
$(document).ready(function(){

// Ejemplo simple con click
  $("p").click(function(){
    //$(this).hide();
  });

  $("p").hover(function(){
   //$(this).css("background-color", "#cccccc");
 });

 $("p").on({
   dbclick: function(){
     $(this).css("background-color", "lightgray");
   },
   hover: function(){
     $(this).css("background-color", "lightblue");
   }
 });

 $("#ocultar").click(function(){
    $("p").hide(1000);
  });
  $("#mostrar").click(function(){
     $("p").show(1000);
  });


  $("#panel1").click(function(){
      $("#panel2").slideToggle()("slow");
    });

});    // Fin general de la función

var valor1=0;
var valor2=0;
var operacion="";
/*
function sumar(){
var valor1 = document.getElementById('texto1').value;
var valor2 = document.getElementById('texto2').value;
document.getElementById('texto3').value = parseInt(valor1) + parseInt(valor2);
};
*/
document.getElementById('texto3').value = parseInt(valor1) + parseInt(valor2);
document.getElementById('texto3').value = 0;
function operacion(){

}





function tomardato(){
valor1 = document.getElementById('texto1').value;
};

function calcular(){
valor2 = document.getElementById('texto1').value;
if (operacion == 'suma'){
  var resultado = valor1 + valor2;
}
};
