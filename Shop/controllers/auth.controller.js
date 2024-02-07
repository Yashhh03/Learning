function getSignUp(req,res,next) {
    res.render('customer/auth/signup');
};

function signup(req,res) {
    
}

function getLogin(req,res,next) {

};


module.exports = {
    getSignUp:getSignUp,
    getLogin:getLogin,
    signup:signup
};