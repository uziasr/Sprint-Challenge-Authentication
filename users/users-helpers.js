module.exports = {
    validateUser
};

function validateUser(user){
   
    // console.log(!user.password || user.password.split('').length < 4)
    let errors = []
    console.log(user.password.split('').length < 4)
    console.log(user.password.split('').length < 4)
    if (!user.password || user.password.split('').length < 4){
        errors.push("Please include a username with at least 2 characters")
    }

    if(!user.password || user.password.length < 4){
        errors.push("Please include a password with at least 4 characters")
    }

    return{
        isSuccessful: errors.length> 0? false : true, errors
    }
}