const { dbConnection, mongoose } = require('../database/mongodb.js');

const Stox = require('../models/stox.js');


let getAllStox = async () => {

    let stoxs;
    try{
        stoxs = await Stox.find().sort({'_date': 1});                    
    }catch(err){
        console.log('DB Error = getAllStox Repository : ' + err.message);
    }

    return stoxs;
}




let getStox = async (authorId) => {

    let author;
    

    try{
        author = await Stox.find({author: authorId});
        
    }catch(err){
        console.log('DB Error = get Stox : ' + err.message);
    }

    return author;

}


let getStoxByDate = async (authorId, date) => {

    let author;

    try{
        author = await Stox.find({author: authorId, _date: date})

    }catch(err){
        console.log('DB Error = get Stox : ' + err.message);
    }

    return author;

}


let createNewFaceoff = async (stox) => {
    console.log(`this is the stox`, stox);
    stox._id = new mongoose.mongo.ObjectId();
    console.log(`this is the new object id`, stox._id);
    
    
    let newStox = new Stox(stox);    
    
    try{
        await newStox.save();
    }catch (err){
        console.log('DB Error = Create new product: ' + err.message);
        return false;
    } 

    return newStox;

};

module.exports = {
    getStox,getStoxByDate,createNewFaceoff,getAllStox
};

