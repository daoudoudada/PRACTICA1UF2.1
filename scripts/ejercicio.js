// Genera un número aleatorio de 5 dígitos al cargar la página
const numeroAleatorio = generarNumeroAleatorio();

// Convierte el número aleatorio en un array de dígitos
const numeroAleatorioArray = numeroAleatorio.toString().split('');

// Inicialización de variables
let intentos = 1;
let juegoGanado = false;
const maxIteracion = 5; // Número máximo de iteraciones
let iteracion = 0;

// Función para generar un número aleatorio de 5 dígitos
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 90000) + 10000;
}

// Muestra el número aleatorio en la consola (para propósitos de prueba)
console.log(numeroAleatorio);

// Función principal para verificar el número ingresado por el usuario
function verificarNumero() {
  // Si el juego ya fue ganado o se alcanzó el máximo de iteraciones, no hacer nada.
  if (juegoGanado || iteracion >= maxIteracion) {
    return;
  }

  // Obtiene el número ingresado por el usuario y los elementos del DOM.
  const numeroInput = document.getElementById('numeroInput').value;
  const pistasDiv = document.getElementById('pistas');
  const mensaje = document.getElementById('mensaje');
  const azul1 = document.getElementById('azul1');
  const azul2 = document.getElementById('azul2');
  const azul3 = document.getElementById('azul3');
  const azul4 = document.getElementById('azul4');
  const azul5 = document.getElementById('azul5');

  // Verifica si el número ingresado es válido y continúa con la lógica del juego.
  if (numeroInput.length !== 5 || isNaN(numeroInput)) {
    mensaje.classList.add('mensaje-rojo');
    mensaje.textContent = 'Por favor, ingresa un número de 5 dígitos válido.';
    return;
  }

  // Incrementa el contador de intentos.
  if (numeroInput == numeroAleatorio) {
    // Mostrar mensaje de felicitaciones en la barra roja
    mensaje.classList.add('mensaje-rojo');
    mensaje.textContent = `¡Felicidades! Has adivinado el número ${numeroAleatorio} en ${intentos} intentos.`;

    // Establecer la variable de bandera para indicar que el juego ha sido ganado.
    juegoGanado = true;
  } else {
    // Mostrar mensaje de intento fallido en la barra roja
    mensaje.classList.add('mensaje-rojo');
    mensaje.textContent = `Intento ${intentos}: el número introducido es incorrecto. Intenta de nuevo.`;
  }

  // Lógica para mostrar las pistas en función de los dígitos correctos o incorrectos
  let resultadoHTML = `<div>`;
  const numeroArray = numeroInput.split('');

  for (let i = 0; i < 5; i++) {
    if (numeroArray[i] === numeroAleatorioArray[i]) {
      resultadoHTML += `<div class="caja verde">${numeroArray[i]}</div>`;
    } else if (numeroAleatorioArray.includes(numeroArray[i])) {
      resultadoHTML += `<div class="caja amarillo">${numeroArray[i]}</div>`;
    } else {
      resultadoHTML += `<div class="caja gris">${numeroArray[i]}</div>`;
    }
  }
  resultadoHTML += `</div>`;

  // Agrega las pistas al elemento HTML correspondiente
  pistasDiv.innerHTML += resultadoHTML;

  // Muestra los dígitos correctos en azul si se adivina el número
  if (numeroInput === numeroAleatorio.toString()) {
    azul1.textContent = numeroAleatorioArray[0];
    azul2.textContent = numeroAleatorioArray[1];
    azul3.textContent = numeroAleatorioArray[2];
    azul4.textContent = numeroAleatorioArray[3];
    azul5.textContent = numeroAleatorioArray[4];
  }

  // Si el juego ha sido ganado, no incrementar más los contadores
  if (juegoGanado) {
    return;
  }

  // Incrementa el contador de intentos y de iteración
  intentos++;
  iteracion++;

  // Si se alcanza el número máximo de iteraciones y el juego no ha sido ganado, muestra mensaje de fin de juego
  if (iteracion === maxIteracion && !juegoGanado) {
    mensaje.classList.add('mensaje-rojo');
    mensaje.textContent = `Lo siento, has agotado tus intentos. El número correcto era ${numeroAleatorio}.`;
  }
}
