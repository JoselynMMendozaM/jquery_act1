$(document).ready(function(){
    //Normal
    $("#btn_ocultar_parrafos").click(function(){
        $("p").hide();
    });

    $("#btn_mostrar_parrafos").click(function(){
        $("p").show();
    });

    //Despacio
    $("#btn_ocultar_despacio").click(function(){
        $("p").hide("slow");
    });
    

    $("#btn_mostrar_despacio").click(function(){
        $("p").show("slow");
    });

    //Con tiempo
    $("#btn_ocultar_slide").click(function(){
        $("p").slideUp(2000);
    });
    $("#btn_mostrar_slide").click(function(){
        $("p").slideDown(2000);
    });

});