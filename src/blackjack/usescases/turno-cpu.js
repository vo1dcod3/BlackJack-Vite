import { pedirCarta,valorCarta,crearCartaHTML } from "./";


/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {HTMLElement>} puntosHTML 
 * @param {HTMLElement>} divCartasComputadora 
 * 
 */
// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck = [] ) => {

    if(!puntosMinimos) throw new error ('puntos minimos son necesarios')
    if(!puntosHTML) throw new error ('argumentos puntoshtml es necesario')

    let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}