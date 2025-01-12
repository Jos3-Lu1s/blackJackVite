/**
 * Crea la carta en el contenedor HTML correspondiente al jugador
 * @param {HTMLElement} contenedor - Contenedor de las cartas dependiendo el jugador.
 * @param {String} Nombrecarta - Identificador del asset de la carta a crear.
 */
export const crearCartaImg = (Nombrecarta, contenedor) => {
    const cartaImg = document.createElement("img");
    cartaImg.src = `assets/cartas/${Nombrecarta}.png`;
    cartaImg.classList.add("carta", "p-0", "animate__animated", "animate__flipInY", "animate__faster");
    cartaImg.alt = "carta";
    contenedor.append(cartaImg);
    cartaImg.addEventListener("animationend", () => {
        cartaImg.classList.remove("animate__animated", "animate__flipInY", "animate__faster");
    });
}