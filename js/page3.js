$(document).ready(function() {
    $('#conteocaracteres').click(function() {
        var name = $('#name').val();
        var nota1 = $('#nota1').val();
        var nota2 = $('#nota2').val();
        var nota3 = $('#nota3').val();

        if (name === '') {
            $('#nameError').show();
        } else {
            $('#nameError').hide();
            var largoTexto = name.length;
            $('#result').html('El nombre tiene ' + largoTexto + ' caracteres.');
        }

        if (nota1 === '') {
            $('#nota1Error').show();
        } else {
            $('#nota1Error').hide();
        }

        if (nota2 === '') {
            $('#nota2Error').show();
        } else {
            $('#nota2Error').hide();
        }

        if (nota3 === '') {
            $('#nota3Error').show();
        } else {
            $('#nota3Error').hide();
        }

        return false; // Detener la acción predeterminada del botón
    });

    $('#promedio').click(function() {
        var name = $('#name').val();
        var nota1 = parseFloat($('#nota1').val());
        var nota2 = parseFloat($('#nota2').val());
        var nota3 = parseFloat($('#nota3').val());

        if (name === '') {
            $('#nameError').show();
        } else {
            $('#nameError').hide();
        }

        if (isNaN(nota1) && isNaN(nota2) && isNaN(nota3)) {
            $('#nota1Error').show();
        } else {
            var promedio = (nota1 + nota2 + nota3) / 3;
            var result_promedio = 'El promedio es ' + promedio.toFixed(2) + '.';

            if (promedio >= 70) {
                result_promedio += ` ¡Felicidades ${name}! Has aprobado con un promedio de ${promedio.toFixed(2)}.`;
            } else {
                result_promedio += ` Lo siento ${name}, has reprobado con un promedio de ${promedio.toFixed(2)}.`;
            }

            $('#result').html(result_promedio);
        }

        return false; // Detener la acción predeterminada del botón
    });
});