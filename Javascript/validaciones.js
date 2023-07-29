export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
      validadores[tipoDeInput](input);
    }
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("nombre-apellido--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("nombre-apellido--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
  }
  
  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

  const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
    },

    NombredelaprendayTalle: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
      },

      Instragram: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
      },

      label: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
      },
};

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
  }
