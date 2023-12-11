import _ from "underscore";

// Esta función crea un nuevo deck

/**
 * 
 * @param {Array<string} tiposDeCarta 
 * @param {Array<string} tiposEspeciales 
 * @returns {Array<string}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length===0 ) 
    throw new console.error('Tipo de cartas es obligatorio');

    if(!tiposEspeciales || tiposDeCarta.length===0 ) 
    throw new console.error('Tipo de cartas es obligatorio');



    let deck =[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}