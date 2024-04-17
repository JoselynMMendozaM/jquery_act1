//cuando el documento este listo
$(document).ready(function(){
    //código(variables, métodos. etc de jquery)
    $("#btn_mostrar").click(function(){
        $("p").show();
    });
    $("#btn_ocultar").click(function(){
        $("p").hide();
        $("#p7").show();
    });
    $("#btn_mostrar_despacio").click(function(){
        //.show("slow") o colocar tiempo en milisegundos
       //$("p").show("slow");
        //1000 = 1 segundos
        $("p").show(1000);
    });
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide("slow");
        $("#p7").show();
    });
    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000);
    });
    $("#btn_ocultar_slide").click(function(){
        $("p").slideUp(2000);
    });
    $("#btn_slide_toggle").click(function(){
        $("p").slideToggle(1000);
        $("#p7").show(500);
        $("#p7").text("Este elemento no se oculto");  
    });
    
    $("#btn-enviar").click(function() {
        let suma = parseFloat($("#txtNum").val()) + 100;
        $("#resultado").text("La suma de " + $("#txtNum").val() + " + 100 es: " + suma); // Replace "paragraph-element" with the correct ID or class
    });

});