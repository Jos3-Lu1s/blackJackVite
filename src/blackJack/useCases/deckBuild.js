import _ from "underscore";

/**
 * Crea un deck de acuerdo a las cartas proporcionadas.
 * @param {Array<String>} tiposCarta - Lista de tipos de carta ["C", "S", "D", "H"] Obligatorio.
 * @param {Array<String>} tiposEspeciales - Lista de tipos de carta con figuras ["A", "J", "K", "Q"] Obligatorio.
 * @returns {Array<String>} - Regresa un nuevo deck de cartas.
 */
export const deckBuild = (tiposCarta, tiposEspeciales) => {
    if (!tiposCarta || tiposCarta.length<=0) throw new Error("El parámetro 'tiposCarta' es obligatorio y no puede estar vacío.");
    if (!tiposEspeciales || tiposEspeciales.length<=0) throw new Error("El parámetro 'tiposEspeciales' es obligatorio y no puede estar vacío.");

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let f of tiposCarta) {
            deck.push(i + f);
        }
    }
    for (let f of tiposCarta) {
        for (let e of tiposEspeciales) {
            deck.push(e + f);
        }
    }
    return _.shuffle(deck);
}