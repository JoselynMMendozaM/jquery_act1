$(document).ready(function() {
    // Evento para agregar fila
    $("#btn_agregar_fila").click(function() {
      var fila = "<tr><td></td><td></td><td></td></tr>";
      $("#tabla_datos tbody").append(fila);
    });
  
    // Evento para eliminar fila
    $("#btn_eliminar_fila").click(function() {
      $("#tabla_datos tbody tr:last-child").remove();
    });
});

  
  



