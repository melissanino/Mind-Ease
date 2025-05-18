function abrirPopupIA() {
  const popup = document.getElementById("popupIA");
  popup.style.display = popup.style.display === "none" || popup.style.display === "" ? "block" : "none";
}

function mostrarMensajeIA() {
  const estado = document.getElementById("estadoEmocional").value;
  const mensajeIA = document.getElementById("mensajeIA");
  let respuesta = "";

  switch (estado) {
    case "triste":
      respuesta = "Está bien sentirse triste a veces. Respira profundo, todo mejora con el tiempo.";
      break;
    case "estresado":
      respuesta = "Haz una pausa. Inhala profundo 3 veces y recuerda que puedes con esto.";
      break;
    case "solo":
      respuesta = "No estás sol@. Tu vida importa y hay personas que se preocupan por ti.";
      break;
    case "agotado":
      respuesta = "Tu cuerpo y mente merecen descanso. Prioriza tu paz.";
      break;
    case "ansioso":
      respuesta = "Tómate un momento para inhalar por 4, mantener por 4, exhalar por 4.";
      break;
    case "desmotivado":
      respuesta = "Incluso el paso más pequeño es progreso. Hoy hiciste lo mejor que pudiste.";
      break;
    default:
      respuesta = "";
  }

  mensajeIA.textContent = respuesta;
}

const frasesAliento = [
  "Confía en ti, lo estás haciendo bien.",
  "Cada día es una nueva oportunidad.",
  "Respira. Estás a salvo aquí y ahora.",
  "Tu salud mental importa. Mucho.",
  "Hoy puede ser el comienzo de algo nuevo.",
  "No estás sol@. Mind Ease te acompaña."
];

document.addEventListener("DOMContentLoaded", () => {
  const mensajeBtn = document.getElementById("mensajeAleatorioBtn");
  const mensajeTexto = document.getElementById("mensajeAleatorioTexto");

  mensajeBtn.addEventListener("click", () => {
    const indice = Math.floor(Math.random() * frasesAliento.length);
    mensajeTexto.textContent = frasesAliento[indice];
  });
});