const { dbConnection, mongoose } = require('../database/mongodb.js');

const User = require('../models/user.js');


let getUsers = async () => {

    let users;

    try{
        users = await User.find()
        return users;
        
    }catch (err){
        console.log('DB Error = Delete product: ' + err.message);
        return false
    } 

}



let getSingleUser = async (email) => {

    let user;
    try{
        user = await User.findOne({email: email})
        return user;

    }catch (err){
        console.log('DB Error = Delete product: ' + err.message);
    } 

       return user;
    

}


let updateUser = async (user) => {

    console.log(`this is the user in the repository`, user);

    try{
        await User.updateOne({username: user.username}, {
            $set: {
                "firstName" : user.firstName, 
                "lastName": user.lastName,
                "phone": user.phone
            }
        });
        console.log(`user successfully updated`)
        let updatedUser = await User.findOne({username: user.nickname})
        return updatedUser;

    }catch(err){
        console.log('DB Error = save new user: ' + err.message);
        return false;
    }
}



let saveNewUser = async (user) => {

    let dbUser = await User.findOne({email: user.email});

    if(dbUser){
        return `user already exists`;
    } 

    let newUser = new User({username: user.nickname, email: user.email});

    try{
        await newUser.save();
    }catch(err){
        console.log('DB Error = save new user: ' + err.message);
        return false
    }

    // console.log(`this is the saved user`, newUser);
    return newUser;
}




module.exports = {
    saveNewUser, getUsers, getSingleUser, updateUser
}