const validator = require('validator');
// const repository = require('../repositories');
const stoxValidator = require('../validator/stoxValidator');
const myaccountRepository = require('../repositories/myaccountRepository');
const User = require('../models/user');

let updateStox = async (stox) => {

    let updatedStox;
    console.log(`this is the stox inside service layer`, stox);

    try{
        updatedStox = await myaccountRepository.updateStox(stox);
        return updatedStox;
    }catch(e){
        console.log('Account Service failed!', e.error);
    }
}

let getStoxById = async (id) => {

    let result = await myaccountRepository.getStoxById(id);

    return result;

};


let deleteStox = async (id) => {

    let deletedStox;

    try{
        deletedStox = await myaccountRepository.deleteStox(id);
        return deletedStox;

    }catch(err){
        console.log('Account Service Failed', err.message);
    }

}



module.exports = {
    updateStox, deleteStox, getStoxById
}