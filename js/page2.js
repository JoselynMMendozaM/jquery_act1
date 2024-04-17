$(document).ready(function(){
    $("#btn_agregar_fila").click(function(){
        $("tabla_datos>tbody").append("<tr><td>1</td><td></td><td></td></tr>")
    });
    
    //forma 1
    //var fila = 1;
    //$("#btn_agregar_fila").click(function(){
        //var nueva_fila = '<tr>\
       // <td></td>\
        //<td></td>\
       // <td></td>\
        // </tr>'  
    //$("table#tabla_datos").append(nueva_fila);
    //fila += 1;
    //});

    //FORMA 2
    $("#botones #btn_agregar_fila").click(function(){
        let fila = "<tr><td>1</td><td></td><td></td></tr>";  
        $("tabla_datos>tbody").append(fila);
    });

    $("#botones #btn_agregar_fila").click(function(){
        let fila = "<tr><td>1</td><td></td><td></td></tr>";  
        $("table tbody tr:last-child").remove(fila);
    });

});



