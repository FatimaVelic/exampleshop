/*
	Author: 		Fatima Velic
	Course: 		CS412 Web Application Development
	Assignment: 	Project 1 - informative warm beverage site
	Due date: 		November 25th, 2019 (first version)
	Last modified:	November 23rd, 2019
	Purpuse:		JavaScript for the page.
*/

/* Image display */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

/* Validation for Registration form. 
JS and corresponding HTML code is taken from site: https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php*/

function formValidation()
{
	var uid = document.registration.userid;
	var passid = document.registration.passid;
	var uname = document.registration.username;
	var urole = document.registration.role;
	var uemail = document.registration.email;
	var umsex = document.registration.msex;
	var ufsex = document.registration.fsex; 

	if(userid_validation(uid,5,12))
	{
		if(passid_validation(passid,7,12))
		{
			if(allLetter(uname))
			{
				if(ValidateEmail(uemail))
				{
					if(roleselect(urole))
					{
						if(validsex(umsex,ufsex))
						{
						}
					}  
				}
			}
		}
	}
	return false;
} 

function userid_validation(uid,mx,my)
{
	var uid_len = uid.value.length;
	if (uid_len == 0 || uid_len >= my || uid_len < mx)
	{
	alert("User Id should not be empty / length be between "+mx+" to "+my);
	uid.focus();
	return false;
	}
	return true;
}

function passid_validation(passid,mx,my)
{
	var passid_len = passid.value.length;
	if (passid_len == 0 ||passid_len >= my || passid_len < mx)
	{
	alert("Password should not be empty / length be between "+mx+" to "+my);
	passid.focus();
	return false;
	}
	return true;
}
function allLetter(uname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
	return true;
	}
	else
	{
	alert('Username must have alphabet characters only');
	uname.focus();
	return false;
	}
}

function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
	return true;
	}
	else
	{
	alert("You have entered an invalid email address!");
	uemail.focus();
	return false;
	}
}
function roleselect(urole)
{
	if(urole.value == "Default")
	{
	alert('Select role for future operations');
	urole.focus();
	return false;
	}
	else
	{
	return true;
	}
}
 
function validsex(umsex,ufsex)
{
	x=0;

	if(umsex.checked) 
	{
	x++;
	} if(ufsex.checked)
	{
	x++; 
	}
	if(x==0)
	{
	alert('Select Male/Female');
	umsex.focus();
	return false;
	}
	else
	{
	alert('Form Succesfully Submitted');
	window.location.reload()
	return true;
	}
}
function resetButton()
{
	alert("THe following imput will be reseted.")
   document.getElementById("userid").innerHTML = "";
   document.getElementById("username").innerHTML = "";
   document.getElementById("urole").innerHTML = "Default";
   document.getElementById("passid").innerHTML = "";
   document.getElementById("uemail").innerHTML = "";
}

function ATCButton()
{
	alert("Product successfully added to cart.");
}

/* Validation for Login form 
JS and corresponding HTML code taken from: https://www.formget.com/javascript-login-form/ 
Data showed is used just for example purpuses. 
*/

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if ( username == "Example" && password == "example")
	{
		alert ("Login successfully");
		return false;
	}
	else
	{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
	// Disabling fields after 3 attempts.
		if( attempt == 0)
		{	
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}