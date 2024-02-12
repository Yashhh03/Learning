const User = require('../models/user.model');
const authUtil =  require('../util/authentication');

function getSignUp(req,res,next) {
    res.render('customer/auth/signup');
};

async function signup(req,res,next) {
const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
);

    try {
        await user.signup();
    } catch (error) {
        next(error);
        return;
    }
    
    res.redirect('/login');
}

function getLogin(req,res,next) {
    res.render('customer/auth/login');
};

async function login(req,res,next) {
    const user = new User(req.body.email,req.body.password);
    let existingUser;
    try {
        existingUser = await user.getUserWithSameEmail();
    } catch (error) {
        next(error);
        return;
    }
    
    if (!existingUser) {
        res.redirect('/login');
        return;
    }

    const passwordIsCorrect = await user.hasMatchingPassword(existingUser.password);

    if(!passwordIsCorrect) {
        res.redirect('/login');
        return;
    }

    authUtil.createUserSession(req,existingUser,function() {
        res.redirect('/');
    });
};

module.exports = {
    getSignUp:getSignUp,
    getLogin:getLogin,
    signup:signup,
    login:login
};