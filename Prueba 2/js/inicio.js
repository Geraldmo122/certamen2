define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    var persona;
    persona = {
        nombre: "Pepito Perez",
        mesanio: "Septiembre 21,1979",
        edad: "43 años",
        estatura: "1.75",
        peso: "70 kg",
        frecuenciacardiaca: "70"
    };
    var casoClinico;
    casoClinico = {
        fecha: "20-10-2020",
        informacion: "Hospitaliza por intoxicacion",
    };
    $('#boton').on('click', function (event) {
        if ($('#formulario').attr("style") == "display: none;") {
            $('#formulario').show();
            $('#antecendetess').hide();
        }
        else {
            $('#formulario').hide();
            $('#antecendetess').show();
        }
    });
    $('#masdatos').on('click', function (event) {
        if ($('#crearDatos').attr("style") == "display: none;") {
            $('#crearDatos').show();
        }
        else {
            $('#crearDatos').hide();
        }
    });
    $("#region").on('change', function () {
        $("#comuna").empty();
        if ($(this).val() === "Rancagua") {
            $("#comuna").append('<option value="Rengo">Rengo</option>');
            $("#comuna").append('<option value="Doñihue">Doñihue</option>');
            $("#comuna").append('<option value="Machalí">Machalí</option>');
            $("#comuna").append('<option value="Graneros">Graneros</option>');
            $("#comuna").append('<option value="Doñihue">Doñihue</option>');
        }
        if ($(this).val() === "Valparaiso") {
            $("#comuna").append('<option value="Quilpue">Quilpue</option>');
            $("#comuna").append('<option value="Valparaiso">Valparaiso</option>');
            $("#comuna").append('<option value="Quillota">Quillota</option>');
            $("#comuna").append('<option value="San Felipe">San Felipe</option>');
            $("#comuna").append('<option value="San Antonio">San Antonio</option>');
        }
    });
    function ValidarRut(valor) {
        var tmp = valor.split('-');
        var digito = tmp[1];
        var rut = tmp[0];
        if (digito == 'K')
            digito = 'k';
        var M = 0, S = 1;
        for (; rut; rut = Math.floor(rut / 10))
            S = (S + rut % 10 * (9 - M++ % 6)) % 11;
        console.log(S ? S - 1 : 'k');
        return S ? S - 1 : 'k';
    }
    (function () {
        $("#personaa").append("<h1>" + persona.nombre + "</h1>");
        $("#personaa").append("<p>" + persona.mesanio + "</p>");
        $("#personaa").append("<p>" + persona.edad + "</p>");
        $("#estatura").append("<p>" + persona.estatura + "</p>");
        $("#peso").append("<p>" + persona.peso + "</p>");
        $("#frecuenciacardiaca").append("<p>" + persona.frecuenciacardiaca + "</p>");
        $("#fecha").append("<p>" + casoClinico.fecha + "</p> <p>" + casoClinico.informacion + "</p> ");
        $("#fecha1").append("<p>" + casoClinico.fecha + "</p> <p>" + casoClinico.informacion + "</p> ");
        $("#fecha2").append("<p>" + casoClinico.fecha + "</p> <p>" + casoClinico.informacion + "</p> ");
        $("#fecha3").append("<p>" + casoClinico.fecha + "</p> <p>" + casoClinico.informacion + "</p> ");
        $("#fecha4").append("<p>" + casoClinico.fecha + "</p> <p>" + casoClinico.informacion + "</p> ");
        $("#fecha5").append("<p>" + casoClinico.fecha + "</p> <p>" + casoClinico.informacion + "</p> ");
        var nombreCompleto = document.getElementById("nombrecompleto");
        var telefono = document.getElementById("telefono");
        var rut = document.getElementById("rut");
        var email = document.getElementById("email");
        telefono.maxLength = "9";
        rut.pattern = "^[0-9]{8}-[0-9Kk]{1}$";
        var campos = document.getElementById("campos");
        console.log(nombreCompleto.value);
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    if (nombreCompleto.value == "") {
                        campos.children[0].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
                    }
                    if (rut.value == "") {
                        campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Campo requerido";
                    }
                    if (ValidarRut(rut.value) > 1) {
                        campos.children[1].getElementsByClassName("invalid-feedback")[0].innerHTML = "Rut no válido";
                    }
                    event.preventDefault();
                    event.stopPropagation();
                }
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }, false);
        });
    })();
});
