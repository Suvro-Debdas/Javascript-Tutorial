// Form Validation.

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = " ";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
function validateForm(){
    var returnval = true;
    clearErrors();

    // Conditions for name validation:

    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    if (name[0].search(/[A-Z]/)==-1){
        seterror("name", "*First letter of your name should be in uppercase.");
        returnval = false;
    }

    // Conditions for email validation:

    var email = document.forms['myForm']["femail"].value;
    if (email.length>30){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    // Conditions for phone validation:

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    // Conditions for password validation:

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 8){ 
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password== ""){ 
        seterror("pass", "*Please enter any password!");
        returnval = false;
    }
    if (password.search(/[0-9]/)==-1){ 
        seterror("pass", "*Please add atleast one numeric character!");
        returnval = false;
    }
    if (password.search(/[a-z]/)==-1){ 
        seterror("pass", "*Please add atleast one lowercase character!");
        returnval = false;
    }
    if (password.search(/[A-Z]/)==-1){ 
        seterror("pass", "*Please add atleast one uppercase character!");
        returnval = false;
    }
    if (password.search(/[!\@\#\$\%\^\&\*]/)==-1){
        seterror("pass", "*Please add atleast one uppercase character!");
        returnval = false;
    }
    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
return returnval;
}

function focusFunction(element){
    element.style.background = "#6e593a";
}

function blurFunction(element){
    element.style.background = "";
}

function infname(element){
    var x = element.value;
    document.getElementById("fname").innerHTML = x;
}

function infemail(element){
    var x = element.value;
    document.getElementById("femail").innerHTML = x;
}

function infphone(element){
    var x = element.value;
    document.getElementById("fphone").innerHTML = x;
}