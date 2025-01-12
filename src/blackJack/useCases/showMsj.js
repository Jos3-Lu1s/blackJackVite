import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    customClass: {
        popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
});

/**
 * Ejecuta un toast con los agurmentos proporcionados
 * @param {String} icon - Icono del mensaje.
 * @param {String} iconColor - Color del icono del mensaje.
 * @param {String} title - Texto del mensaje.
 * @param {String} textcolor - Color del texto del mensaje.
 * @param {String} bgcolor - Color del fondo.
 */
export const showMsj = (icon, iconcolor, title, textcolor, bgcolor) => {
    Toast.fire({
        icon: icon,
        iconColor: iconcolor,
        title: title,
        color: textcolor,
        background: bgcolor,
    })
}