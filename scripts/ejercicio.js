const numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 90000) + 10000;
}

function verificarNumero() {
  const numeroInput = document.getElementById('numeroInput').value;
  const mensaje = document.getElementById('mensaje');
  const pistasDiv = document.getElementById('pistas');
  let resultadoHTML = '';

  if (numeroInput.length !== 5 || isNaN(numeroInput)) {
    mensaje.textContent = 'Por favor, ingresa un número de 5 dígitos.';
    return;
  }

  intentos++;
  if (numeroInput == numeroAleatorio) {
    mensaje.textContent = `¡Felicidades! Has adivinado el número ${numeroAleatorio} en ${intentos} intento(s).`;
  } else {
    mensaje.textContent = `Intento ${intentos}: Intenta de nuevo.`;
    const numeroArray = numeroInput.split('');
    const numeroAleatorioArray = numeroAleatorio.toString().split('');

    resultadoHTML += `<div>Intento ${intentos}: `;
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

    pistasDiv.innerHTML += resultadoHTML;
  }
}