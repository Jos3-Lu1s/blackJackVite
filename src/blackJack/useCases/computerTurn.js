import { crearCartaImg, getCard, acumularPuntos, determinarGanador } from "./";

export const turnoComputadora = (puntajeJugadores, puntosMinimos, deck, puntaje, puntajesHTML, contenedor) => {
    let puntajeComputadora = 0;
    do {
        const carta = getCard(deck);
        // puntajeComputadora = puntajeComputadora + valueCard(carta);
        // puntajes[1].innerText = puntajeComputadora;
        puntajeComputadora = acumularPuntos(puntajeJugadores, puntaje, carta, puntajesHTML);
        crearCartaImg(carta, contenedor[puntaje]);

    } while (puntajeComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador(puntosMinimos, puntajeJugadores[puntaje]);
}