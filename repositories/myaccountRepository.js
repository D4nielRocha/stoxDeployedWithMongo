const { dbConnection, mongoose } = require('../database/mongodb.js');

const Stox = require('../models/stox.js');


let updateStox = async (stox) => {
    
    console.log(stox._id)

    try{
        await Stox.updateOne({_id: stox._id}, {
            $set: stox
        });
        return true;
    } catch (err){
        console.log('DB Error = Update product: ' + err.message);
        return false

    } 
};


let getStoxById = async (id) => {

    let stoxId;
    console.log(id);

    try{
        stoxId = await Stox.findById(id);
        return stoxId;

    }catch (err){
        console.log('DB Error = Delete product: ' + err.message);
    } 
    // console.log(`this is the deletedStox in the repository`, stoxId);
    // return stoxId;
}

let deleteStox = async (id) => {

    let deletedStox;
    // console.log(`this is the stox at the repository`, id);

    try{
        deletedStox = await Stox.findByIdAndDelete(id);
        return true;
    }catch (err){
        console.log('DB Error = Delete product: ' + err.message);
        return false;
    } 
}


module.exports = {
    updateStox, deleteStox, getStoxById
}