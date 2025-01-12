import { showMsj } from "./";
/**
 * Determina el ganador de la partida y lanza un toast.
 * @param {Number} puntajeJugador - Puntaje acumulado del jugador.
 * @param {Number} puntajeComputadora - Puntaje acumulado de la computadora.
 */
export const determinarGanador = (puntajeJugador, puntajeComputadora) => {
    if (puntajeComputadora === puntajeJugador) {
        showMsj("warning", "white", "NADIE GANA", "white", "#f8bb86");
    } else if (puntajeJugador > 21) {
        showMsj("info", "white", "COMPUTADORA GANA", "white", "#3fc3ee");
    } else if (puntajeComputadora > 21) {
        showMsj("success", "white", "JUGADOR GANA", "white", "#a5dc86");
    } else if (puntajeComputadora === 21 && puntajeJugador != 21) {
        showMsj("info", "white", "COMPUTADORA GANA", "white", "#3fc3ee");
    } else if (puntajeComputadora > puntajeJugador && puntajeComputadora < 21) {
        showMsj("info", "white", "COMPUTADORA GANA", "white", "#3fc3ee");
    }
}
