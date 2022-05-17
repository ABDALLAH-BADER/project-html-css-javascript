function validation() {
  // store the value that user enter in variables
  var user = document.getElementById('user').value;
  var user2 = document.getElementById('user2').value;
  var pass = document.getElementById('pass').value;
  var conpass = document.getElementById('conpass').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;

  var myform = document.getElementById('myform');
  // to check if that field empty or not


  //  to accert a name of 3 letters at least
  if (user.length < 3) {
    alert("first Name must be more than 2 letters");
    return false;
  }
  if (user2.length < 3) {
    alert("last Name must be more than 2 letters");
    return false;
  }



  if (pass.search(/[ ]/) != -1) {
    alert("*must not include a space*");
    return false;
  }
  // limit the lenght of the  pass
  if (pass.length != 8) {
    alert("*please write a passward of 8 no long no less*");
    return false;
  }
  // must enclud numbers
  if (pass.search(/[0-9]/) == -1) {

    alert("must incluce at least a number");
    return false;
  }
  //not to accept without upper characters
  if (pass.search(/[A-Z]/) == -1) {
    alert("*must include at leasrt 1 upper character*");
    return false;
  }
  // not to accept without lower characters
  if (pass.search(/[a-z]/) == -1) {
    alert("*must include at least 1 lowwer character*");
    return false;
  }
  // not accept without special characters
  if (pass.search(/[!\@\#\$\%\^\&\*\(\)\_\-\=\+\<\>\,\?]/) == -1) {

    alert("*must include 1 special character*");
    return false;
  }

  if (conpass != pass) {
    alert("**passward isnot matches");
    return false;

  }

  if (email.indexOf("@") == -1 || email.length < 6) {
    alert("*Please Enter valid Email*");
    return false;
  }


}
