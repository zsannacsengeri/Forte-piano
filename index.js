function validate(){
    var mail = document.getElementById("text").value;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

    if(regx.test(mail)){
        alert("Thank you for submiting!")
        return true;
    }
    else{
        alert("Sorry! Incorrect Email")
        return false;
    }
}
