const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/db');
const { validateRegister } = require('../middleware/user');




// register user

router.post('/register', validateRegister,(req, res, next) => {
    const { username, email, password } = req.body;
    db.query(`SELECT * FROM users WHERE LOWER(email) = LOWER('${email}')`, (err, result) => {
        if(result.length) { // error if email already exists
            res.status(409).send({
                message: "Email already exists"
            })
        }
        else{ // if email doesn't exist, hash password and insert into database
            bcrypt.hash(password, 10, (err, hash) => {
                if(err){
                    res.status(500).send({message: err});
                }else{
                    db.query(`INSERT INTO users (username, email, password) VALUES  ('${username}', '${email}', '${hash}')`, (err, result) => {
                        if(err){
                            throw err;
                            res.status(500).send({message: err});
                        }
                        res.status(201).send({message: "User created"});
                    })
                }
            })
        }
    })
})

// login user 

// router.post('/login',validateLogin, (req, res, next) => {
//     const { email, password } = req.body;

//     db.query(`SELECT * FROM users WHERE LOWER(email) = LOWER('${email}')`, (err, result) => {
//         if(err){
//             res.status(500).send({message: err});
//         }
//         if(result.length){
//             bycrypt.compare(password, result[0].password, (err, isMatch) => {
//                 if(err){
//                     res.status(500).send({message: err});
//                 }
//                 if(isMatch){
//                     const token = jwt.sign({
//                         email: result[0].email,
//                         username: result[0].username,
//                         userId: result[0].id
//                     }, 'secret', {
//                         expiresIn: '1h'
//                     })
//                     res.status(200).send({
//                         message: "Logged in",
//                         token: token,
//                     })
//                 }else{
//                     res.status(401).send({
//                         message: "Incorrect password"
//                     })
//                 }
//             })
//         }else{
//             res.status(401).send({
//                 message: "Invalid credentials"
//             })
//         }
//     })
// })


// // get user info

// router.get('/user', (req, res, next) => {

//     let token = req.headers.authorization.split(' ')[1];

//      console.log(token);
//      jwt.verify(token, 'secret', (err, decoded) => {
//          console.log(decoded);
//          if(err){
//              res.status(401).send({
//                  message: "Invalid token"
//              })
//          }
//          db.query(`SELECT * FROM users WHERE id = ${decoded.userId}`, (err, result) => {
//              if(err){
//                  res.status(500).send({message: err});
//              }
//              res.status(200).send({
//                  message: "User profile",
//                  user: result[0]
//              })
//          })
//      })
//  })

//  router.delete('/logout', (req, res, next) => {
//     res.status(200).send({
//         message: "Logged out"
//     })
// })


// router.delete('/delete', (req, res, next) => {
//     let token = req.headers.authorization.split(' ')[1];
//     jwt.verify(token, 'secret', (err, decoded) => {
//         if(err){
//             res.status(401).send({
//                 message: "Invalid token"
//             })
//         }
//         db.query(`DELETE FROM users WHERE id = ${decoded.userId}`, (err, result) => {
//             if(err){
//                 res.status(500).send({message: err});
//             }
//             res.status(200).send({
//                 message: "User deleted"
//             })
//         })
//     })
// })


module.exports = router;
