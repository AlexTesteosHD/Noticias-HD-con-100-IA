function cargarPagina(pagina) {

    fetch(pagina)

        .then(function(respuesta) {

            if (!respuesta.ok) {

                throw new Error(
                    "No se pudo cargar la página"
                );

            }

            return respuesta.text();

        })

        .then(function(datos) {

            const contenido =
                document.getElementById("contenido");

            contenido.innerHTML = datos;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });


            /*
             * Si se carga inicio.html,
             * iniciamos nuevamente el slider.
             */

            if (pagina === "inicio.html") {

                iniciarSlider();

            }

        })

        .catch(function(error) {

            document.getElementById("contenido").innerHTML = `

                <section class="bienvenida">

                    <div class="bienvenida-texto">

                        <span class="etiqueta">
                            ERROR
                        </span>

                        <h2>
                            No se pudo cargar
                            la sección
                        </h2>

                        <p>
                            Verifica que el archivo
                            exista y vuelve a intentarlo.
                        </p>

                    </div>

                </section>

            `;

            console.error(error);

        });

}