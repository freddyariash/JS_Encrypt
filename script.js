const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  let textoEscrito = document.querySelector(".text-area").value;
  textoEscrito = textoEscrito.toLowerCase();
  textoEscrito = textoEscrito.replace(/á/gi, "a");
  textoEscrito = textoEscrito.replace(/é/gi, "e");
  textoEscrito = textoEscrito.replace(/í/gi, "i");
  textoEscrito = textoEscrito.replace(/ó/gi, "o");
  textoEscrito = textoEscrito.replace(/ú/gi, "u");
  textoEscrito = textoEscrito.replace(/ñ/gi, "n");
  let validador = textoEscrito.match(/^[a-z]*$/);
  if (!validador || validador === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    textArea.value = "";
    copia.style.display = "block";
  }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["é", "enter"],
    ["i", "imes"],
    ["í", "imes"],
    ["a", "ai"],
    ["á", "ai"],
    ["o", "ober"],
    ["ó", "ober"],
    ["u", "ufat"],
    ["ú", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}
