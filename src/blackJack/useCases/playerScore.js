import { valueCard } from "./";
/**
 * Retorna una carta del deck proporcionado.
 * @param {Array<Number>} puntajeJugadores - Arreglo de los puntajes acumulados correspondiente a cada jugador.
 * @param {Number} turnoJugador - TurnoJugador: 0 = primer jugador y el ultimo = pc.
 * @param {Number} carta - Valor de la carta a acumular al puntaje del jugador.
 * @param {HTMLElement} puntosHTML - Contenedor HTML para mostrar el puntaje.
 * @returns {Number} - Regresa la suma del puntajes.
 */
export const acumularPuntos = (puntajeJugadores, turnoJugador, carta, puntosHTML) => {
    puntajeJugadores[turnoJugador] = puntajeJugadores[turnoJugador] + valueCard(carta);
    puntosHTML[turnoJugador].innerText = puntajeJugadores[turnoJugador];
    return puntajeJugadores[turnoJugador];
}
