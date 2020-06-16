var form = document.getElementById('registerForm');
var firstNameInput = document.getElementById('fname');
var lastNameInput = document.getElementById('lname');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('pwd');
var passwordRepeatInput = document.getElementById('pwdrepeat');
var countryInput = document.getElementById('country');
var telInput = document.getElementById('telephone');
var emailInput = document.getElementById('email'); 
var codeInput = document.getElementById ("code");


registerForm.addEventListener('submit',validate);
emailInput.addEventListener('input',validateEmail);
usernameInput.addEventListener('input',validateUsername); 
firstNameInput.addEventListener('input',validateFirstName); 
lastNameInput.addEventListener('input',validateLastName); 
codeInput.addEventListener('input',validateCode); 

// telInputInput.addEventListener('input',validateTel); 
// passwordInput.addEventListener('input',checkPassword); 
// passwordRepeatInput.addEventListener('input',checkPassword); 

function validate(event){
  event.preventDefault();/*действието по подразбиране, коeто принадлежи към събитието няма да се случи.*/

  if (validateFirstName()) {
    alert('Correct: You entered а corect first name!');    
  }

  if (validateLastName()) {
    alert('Correct: You entered а corect last name!');
  }

  if (validateUsername()) {
    alert('Correct: You entered а corect username!');
  }

  if(checkPassword()) {
    alert('Correct: You entered а corect password!');
  }

  if(validateGender()) {
    alert('Correct: You entered your gender!');
  }

  if (validateCountry()) {
    alert('Correct: You entered your country!');
  }

  if (validateTel()) {
    alert('Correct: You entered your telephone!');
  }

  if (!validateCheckBox()) {
    alert('Error: The checkbox IS NOT checked!');
  }

  if (validateCode()) {
    alert('Correct: You entered the code from the picture!');
  }
} 


function validateFirstName() {
  var firstName=firstNameInput.value;
  var reg=/^[a-zA-Z ]+$/;

  if (firstName==="") {
    alert('Error: First name cannot be blank!');
    firstNameInput.style.border = '3px solid #e60000';
    return false;
  }
 if(!reg.test(firstName)) {
    firstNameInput.style.border = '3px solid #e60000 ';//red
    // firstNameInput.style.backgroundColor='#f2ba2e';
    return false;
  } else {
    firstNameInput.style.border = '3px solid #f2ba2e ';//orange
    //firstNameInput.style.backgroundColor='#ff471a';
  }
  return true;
}

function validateLastName() {
  var lastName=lastNameInput.value;
  var reg=/^[a-zA-Z ]+$/;

  if (lastName==="") {
    alert('Error: Last name cannot be blank!');
    lastNameInput.style.border = '3px solid #e60000';
    return false;
  }

  if(!reg.test(lastName)) {
    lastNameInput.style.border = '3px solid #e60000';
    //lastNameInput.style.backgroundColor='#f2ba2e';
  } else {
    lastNameInput.style.border = '3px solid #f2ba2e';
    //lastNameInput.style.backgroundColor='#ff471a';
  }
  return true;
}

function validateUsername() {
  var userName=usernameInput.value;
  var reg=/^[a-zA-Z ]+$/;

  if (userName==="") {
    alert('Error: Username cannot be blank!');
    usernameInput.style.border = '3px solid #e60000';
    return false;
  }

  if(!reg.test(userName)) {
    usernameInput.style.border = '3px solid #e60000';
    //usernameInput.style.backgroundColor='#f2ba2e';
  } else {
    usernameInput.style.border = '3px solid #f2ba2e';
    //usernameInput.style.backgroundColor='#ff471a';
  }
  return true;
}

function checkPassword() {
  var passwordInputText=passwordInput.value;
  var passwordRepeatInputText=passwordRepeatInput.value;
  var reg = /[0-9]/;

  if (passwordInputText==="") {
    alert('Error: Password cannot be blank!');
    passwordInput.style.border = '3px solid #e60000';
    passwordRepeatInput.style.border = '3px solid #e60000';
    return false;
  }

  if(passwordInputText === passwordRepeatInputText) {

    if(passwordInputText.length < 6) {
      alert("Error: Password must contain at least six characters!");
      return false;
    } else {
      passwordInput.style.border = '3px solid #f2ba2e';
      passwordRepeatInput.style.border='3px solid #f2ba2e';
    } 
    
    if(!reg.test(passwordInputText)) {
      alert("Error: Password must contain at least one number (0-9)!");
      passwordInput.style.border = '3px solid #e60000';
      passwordRepeatInput.style.border='3px solid #e60000';
      return false;
    }      
  } 
  
  else {
      alert("Error: Please check that you've entered and confirmed your password!");
      passwordInput.style.border = '3px solid #e60000';
      passwordRepeatInput.style.border='3px solid #e60000';
      return false;
    }
    return true;
}

function validateGender() {
  var male = document.getElementById ("male");
  var female = document.getElementById ("female");
  var other = document.getElementById ("other");

  if(!male.checked && !female.checked && !other.checked) {
        alert ("Error: Choose your gender!");
        return false;
  }
  return true;
}

function validateCountry() {
  var country=countryInput.value;

  if(country === "") {
        alert('Error: Select your country!');
        countryInput.style.border = '3px solid #e60000';
        return false;
      } else {
        countryInput.style.border = '3px solid #f2ba2e';
      }
      return true;
}

function validateTel() {
  var tel = telInput.value;
  var regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;

  if(tel === "") {
      alert('Error: Choose your telephone!');
      telInput.style.border = '3px solid #e60000';
      return false;
  }

  if(!regex.test(tel)) {
    alert ("Error: Invalid telephone number!");
    telInput.style.border = '3px solid #e60000';
    return false;
  } else {
      telInput.style.border = '3px solid #f2ba2e';
  }
  return true;
}

function validateEmail() {
  var email=emailInput.value;
  var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!reg.test(email)){
    emailInput.style.border = '3px solid #e60000 ';
  }
  else{
    emailInput.style.border = '3px solid #f2ba2e';
  } 
}

function validateCheckBox() {
  var checkbox = document.getElementById ("checkboxfield");
  if(checkbox.checked) {
      alert("Correct: The checkbox IS checked");
      return true;
  }
      return false;
}

function validateCode() {
  var codeInputText = codeInput.value;

  if(codeInputText==="") {
    codeInput.style.border='3px solid #e60000 ';
    alert("Error: Please fill in the code from the picture!")
    return false;
  }

  if(codeInputText!=="") {
    codeInput.style.border='3px solid #f2ba2e ';
    return true;
  }
  return true;
}



