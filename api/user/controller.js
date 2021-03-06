
const users = require('../../models/user');
const schemaUser = require('./schema').ValidatorSchemaOfBody ;
const Joi = require('../../lib/joi');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'

function _validateschemaUser(body){
    return Joi.attempt(body,schemaUser);

}


async function addUser(req,res){
    userr=req.body;
    let user1= await users.findUserbyEmail(req.body.email);
    if(user1){
        console.log(user1)
        console.log(req.body.email+' user exists please choose another one !')
    }else{

        bcrypt.hash(req.body.password, 10, (err, hash) => {
            userr.password = hash
            
              users.insertOne(userr).then(() =>{

                res.json({ status: userr.email + ' Registered!' })


              }).catch(err => {
                res.send('error: ' + err)
              });
          })
   
    
    }
}

async function login(req,res){

    let user1= await users.findUserbyEmail(req.body.email);
    if(!user1){
        console.log(user1)
        console.log(req.body.email+' User does not exist')
    }else{
        
        if (bcrypt.compareSync(req.body.password, user1.password)) {

            const payload = {
                _id: user1._id,
                first_name: user1.first_name,
                last_name: user1.last_name,
                email: user1.email,
                role: user1.role
              }
              let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 1440
              })
              res.send(token)

        }else{
            res.json({ error: 'Wrong password' })
        }


    }




}


async function profile(req,res){

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    let user= await users.findUserbyEmail(decoded.email);
    if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }


}

async function deleteUser(req,res){

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    console.log('delete')
    let user= await users.findUserbyEmail(req.body.email);
    if (user) {
        if(decoded.role==='admin'){
            users.deleteUser(decoded.email)
            res.send('user deleted successfully')
        }else{
            res.send('user not deleted you need admin privilege')
        }
        
      } else {
        res.send('User does not exist')
      }

}

async function updateUser(req,res){

    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
    let user= await users.findUserbyEmail(req.body.email);
    if (user) {
        if(decoded.role==='admin' || user._id==decoded._id){
            console.log("update")
            console.log(user)
            let user1= await users.updateUser(user._id,req.body);
            console.log(user1)
            res.json(user1)
        }else{
            res.send('user not deleted you need admin privilege')
        }

    } else {
        res.send('User does not exist')
      }

}


module.exports = {
    addUser,
    login,
    profile,
    deleteUser,
    updateUser
}; 