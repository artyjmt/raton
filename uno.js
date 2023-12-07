
              function mostrarPorcentaje() {
            var seleccion = document.getElementById("carreras").value;
            var filas = document.getElementsByTagName("tr");

            for (var i = 0; i < filas.length; i++) {
                if (filas[i].id === seleccion) {
                    filas[i].style.display = "none";
                } else {
                    filas[i].style.display = "none";
                }
            }
        }

        // JavaScript para mostrar/ocultar el menú en pantallas pequeñas
        document.getElementById("menuIcon").addEventListener("click", function () {
            var nav = document.querySelector("nav");
            nav.style.display = nav.style.display === "block" ? "none" : "block";
        });