function isEmpty(value) {
    return !value || value.trim() === '';
}

function userCredientialsAreValid(email,password) {
    return email &&
    email.includes("@") &&
    password &&
    password.trim().length >= 6
}

function userDetailsAreValid(email,password,name,street,postal,city) {
    return (
    userCredientialsAreValid(email,password) &&
    !isEmpty(name) &&
    !isEmpty(street) &&
    !isEmpty(postal) &&
    !isEmpty(city)
    );
}

function emailIsConfirmed(email,confirmEmail) {
    return email === confirmEmail;
}

module.exports = {
    userCredientialsAreValid: userCredientialsAreValid,
    userDetailsAreValid:userDetailsAreValid,
    emailIsConfirmed:emailIsConfirmed
};