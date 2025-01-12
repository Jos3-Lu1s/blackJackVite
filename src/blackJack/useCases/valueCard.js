/**
 * Regresa el valor de la carta obtenida del deck
 * @param {String} card - Carta del deck.
 * @returns {Number} - Regresa el valor de la carta.
 */
export const valueCard = (card) => isNaN(card.substring(0, card.length - 1)) == false ? card.substring(0, card.length - 1) * 1 : card.substring(0, card.length - 1) === "A" ? 11 : 10;
