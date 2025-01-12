import { deckBuild, getCard, turnoComputadora, acumularPuntos, crearCartaImg } from "./useCases";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import 'animate.css';

// C = TREBOL S = SWORD D = DIAMONDS H = HEARTS

//Funcion anonima auto invocada
const moduloBlackJack = (() => {
    'use strict';

    /**
     * DOM referencias
     */
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevoJuego = document.querySelector("#btnNuevo"),
        puntajes = document.querySelectorAll("span"),
        divCartasJugador = document.querySelectorAll(".divCartas");

    let deck = [];
    const figuras = ["C", "S", "D", "H"], especial = ["A", "J", "K", "Q"];
    // let puntajeJugador = 0, puntajeComputadora = 0;
    let puntajeJugadores = [];

    /**
     * Comenzar juego
     */
    const inicializarJuego = (nJugadores = 1) => {
        deck = deckBuild(figuras, especial);
        puntajeJugadores = [];
        for (let i = 0; i <= nJugadores; i++) {
            puntajeJugadores.push(0);
        }
        puntajes.forEach(puntaje => puntaje.innerText = 0);
        divCartasJugador.forEach(cartas => cartas.innerHTML = "");
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    

    /**
     * EVENTOS
     */
    btnPedir.addEventListener("click", () => {
        const carta = getCard(deck);
        const puntajeJugador = acumularPuntos(puntajeJugadores,0, carta,puntajes);
        // puntajeJugador = puntajeJugador + valueCard(carta);
        // puntajes[0].innerText = puntajeJugador;
        crearCartaImg(carta, divCartasJugador[0]);

        if (puntajeJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntajeJugadores, puntajeJugador, deck, puntajeJugadores.length - 1,puntajes,divCartasJugador);
        } else if (puntajeJugador === 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntajeJugadores, puntajeJugador, deck, puntajeJugadores.length - 1,puntajes,divCartasJugador);
        }
    });

    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        turnoComputadora(puntajeJugadores, puntajeJugadores[0], deck, puntajeJugadores.length - 1,puntajes,divCartasJugador);
        // determinarGanador(puntajeJugadores[0], puntajeJugadores[puntajeJugadores.length - 1]);
        btnDetener.disabled = true
    });

    btnNuevoJuego.addEventListener("click", () => {
        if (deck.length != 52) {
            inicializarJuego();
        }
    });
    return {
        nuevoJuego: inicializarJuego
    };
})();
