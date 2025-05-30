(function () {
  tinymce.PluginManager.add("mi_icono_alergeno", function (editor, url) {
    var imagenes = miPluginImagenes;

    editor.addButton("mi_icono_alergeno", {
      title: "Insertar icono alérgeno",
      icon: false,
      image: imagenes?.Gluten?.cuadrada,
      onclick: function () {
        // Eliminar anteriores si existen
        const anterior = document.getElementById("popup-iconos-alergenos");
        if (anterior) anterior.remove();

        // Crear ventana flotante
        const popup = document.createElement("div");
        popup.id = "popup-iconos-alergenos";
        popup.style.background = "white";
        popup.style.border = "1px solid #ccc";
        popup.style.zIndex = "80000";
        popup.style.borderRadius = "8px";
        popup.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        popup.style.maxWidth = "350px";
        popup.style.textAlign = "center";
        popup.style.position = "fixed";
        popup.style.top = "300px";
        popup.style.left = "45%";
        popup.style.marginTop = "5px";
        popup.style.cursor = "move";

        // Contenido del popup
        popup.innerHTML = `
          <div style="text-align: right;">
            <button id="cerrar-popup-iconos" style="
              background: transparent;
              border: none;
              font-size: 18px;
              cursor: pointer;
              color: #888;
            " title="Cerrar">×</button>
          </div>
          <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 10px;">
            <button class="btn-forma" data-forma="cuadrada">Cuadrada</button>
            <button class="btn-forma" data-forma="redonda">Redonda</button>
            <button class="btn-forma" data-forma="triangular">Triangular</button>
          </div>
          <div id="contenedor-iconos-alergenos" style="display: flex; flex-wrap: wrap; justify-content: center;"></div>
        `;

        // Añadir al DOM
        const boton = document.querySelector(
          '.tox-tbtn[title="Insertar icono alérgeno"]'
        );
        if (boton) {
          boton.style.position = "relative";
          boton.appendChild(popup);
        } else {
          document.body.appendChild(popup);
        }

        // Función para renderizar iconos según forma
        function renderizarIconosPorForma(formaSeleccionada) {
          const contenedor = popup.querySelector(
            "#contenedor-iconos-alergenos"
          );
          contenedor.innerHTML = "";

          Object.keys(imagenes).forEach((alergeno) => {
            const url = imagenes[alergeno][formaSeleccionada];

            const wrapper = document.createElement("div");
            wrapper.style =
              "width: 70px; margin: 6px; text-align: center; font-size: 12px;";

            const img = document.createElement("img");
            img.src = url;
            img.alt = alergeno;
            img.setAttribute("data-icono", alergeno);
            img.setAttribute("data-forma", formaSeleccionada);
            img.style =
              "width:45px;height:45px;cursor:pointer;border-radius:4px;margin: 5px;";
            img.title = `${alergeno} (${formaSeleccionada})`;

            img.addEventListener("click", () => {
              editor.insertContent(
                '<img src="' +
                  img.src +
                  '" alt="' +
                  img.alt +
                  '" style="width:30px;height:30px;margin-left:5px" />'
              );
            });

            const label = document.createElement("div");
            label.textContent = alergeno;
            label.style = "color: #333;";

            wrapper.appendChild(img);
            wrapper.appendChild(label);
            contenedor.appendChild(wrapper);
          });
        }

        // Añadir eventos a los botones de forma
        popup.querySelectorAll(".btn-forma").forEach((btn) => {
          btn.style =
            "font-size: 20px; cursor: pointer; border-radius: 4px; padding: 5px 10px; background: #f9f9f9; font-size: 15px;";
          btn.addEventListener("click", () => {
            const forma = btn.getAttribute("data-forma");
            renderizarIconosPorForma(forma);
          });
        });

        // Render por defecto: cuadrada
        renderizarIconosPorForma("cuadrada");

        // Cerrar popup
        popup
          .querySelector("#cerrar-popup-iconos")
          .addEventListener("click", () => {
            popup.remove();
          });

        // Cerrar al hacer clic fuera
        document.addEventListener("click", function cerrarAlClickFuera(e) {
          if (
            popup &&
            !popup.contains(e.target) &&
            boton &&
            !boton.contains(e.target)
          ) {
            popup.remove();
            document.removeEventListener("click", cerrarAlClickFuera);
          }
        });

        // Hacer draggable
        (function hacerDraggable(popup) {
          let isDragging = false;
          let offsetX = 0;
          let offsetY = 0;

          popup.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - popup.getBoundingClientRect().left;
            offsetY = e.clientY - popup.getBoundingClientRect().top;
            popup.style.transition = "none";
          });

          document.addEventListener("mousemove", function (e) {
            if (isDragging) {
              popup.style.left = e.clientX - offsetX + "px";
              popup.style.top = e.clientY - offsetY + "px";
            }
          });

          document.addEventListener("mouseup", function () {
            isDragging = false;
          });
        })(popup);
      },
    });
  });
})();
