const jwt = require('jsonwebtoken');

module.exports = {
    validateRegister: (req, res, next) => {
        const { username, email, password } = req.body;
        if(username.length < 3){
            res.status(422).json({
                message: "Username must be at least 3 characters"
            })
        }
        if(password.length < 3){
            res.status(422).json({
                message: "Password must be at least 3 characters"
            })
        }
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            res.status(422).json({
                message: "You have entered an invalid email address!"
            })
        }
        if (!username || !email || !password) {
            res.status(422).json({
                message: "Please fill all the fields"
            })
        } else {
            next();
        }
    },

    validateLogin: (req, res, next) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(422).json({
                message: "Please fill all the fields"
            })
        } else {
            next();
        }
    }

}