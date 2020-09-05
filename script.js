const email = document.getElementById("email");
const zipCode = document.getElementById("zip");

email.addEventListener("input", function(event){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Invalid Email Address");
    }
    else{
        email.setCustomValidity("");
    }
});

zipCode.addEventListener("input", function(event){
    if(zipCode.validity.patternMismatch){
        zipCode.setCustomValidity("Zip codes are 5 digits long and only numbers");
    }

    else{
        zipCode.setCustomValidity("");
    }
});