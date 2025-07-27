const inputs = document.querySelectorAll(".pin-container input");
    const botones = document.querySelectorAll(".teclado button");
    let posicion = 0;

    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const numero = boton.dataset.num;

        // Si es un número
        if (numero !== undefined) {
          if (posicion < inputs.length) {
            inputs[posicion].value = numero;
            posicion++;

            // Si ya se llenaron todos los inputs
            if (posicion === inputs.length) {
              const codigo = Array.from(inputs).map(i => i.value).join("");
            }
          }
        }

        // Si es el botón borrar (⌫)
        if (boton.id === "borrar") {
          borrarNumero();
        }

        // Si es el botón borrar todo (C)
        if (boton.id === "borrarTodo") {
          borrarTodo();
        }
      });
    });

    function borrarNumero() {
      if (posicion > 0) {
        posicion--;
        inputs[posicion].value = "";
      }
    }

    function borrarTodo() {
      inputs.forEach(input => input.value = "");
      posicion = 0;
    }