const validator = require('validator');
const Stox = require('../models/stox');




let stoxValidation = (stox) => {
    console.log('validation');

let stoxId = 0;


if(stox.hasOwnProperty('_id')){
    stoxId = stox._id;
}

if(stox === null){
    console.log("The parameter is null === stoxValidation");
}

if( validator.isDecimal(stox.asset1_closing + '', {no_symbols: true, allow_negation: false}) && 
    validator.isDecimal(stox.asset2_closing + '', {no_symbols: true, allow_negation: false}) &&
    validator.isDate(stox._date) && 
    stox.author != null) {
    return stox;

   } else {
       console.log("Error validating new stox")
       return 'error validating'
   }
}




let updateValidation = (stox) => {

    let validatedStox;

    if(stox === null){
        console.log("The parameter is null === stoxValidation");
    }

    if( validator.isNumeric(stox._id + '', {no_symbols: true, allow_negative: false}) &&
    validator.isDecimal(stox.asset1_closing + '', {no_symbols: true, allow_negation: false}) && 
    validator.isDecimal(stox.asset2_closing + '', {no_symbols: true, allow_negation: false}) &&
    validator.isDate(stox._date) && 
    stox.author != null) {
        validatedStox =  new Stox(
            stox._id,
            stox.asset1_amount,
            stox.asset1_price,
            stox.asset1_shares,
            stox.asset1_closing,
            stox.asset2_amount,
            stox.asset2_price,
            stox.asset2_shares,
            stox.asset2_closing,
            stox.comment,
            stox._date,
            stox.author);
   } else {
       console.log("Error validating new stox")
   }
//    console.log(validatedStox);
   return validatedStox;
}



module.exports = {
    stoxValidation, updateValidation
}