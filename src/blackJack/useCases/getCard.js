import { showMsj } from "./showMsj";

/**
 * Retorna una carta del deck proporcionado.
 * @param {Array<String>} deck - Deck de cartas.
 * @returns {String} - Regresa una carta del deck.
 */
export const getCard = (deck) => deck.length === 0 ? showMsj("error", "white", "NO HAY MAS CARTAS EN EL DECK", "white", "#f27474") : deck.pop();