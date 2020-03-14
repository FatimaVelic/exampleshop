/*
	Fatima Velic
	Praksa - Online trgovina 
	12. Mart 2020. (početak)
	23. Mart 2020. (rok za predaju)
	functionality.js - sve js funkcije koje stranica koristi navedene su ovdje
*/

/* Photo galery */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}

function showSlides(n) 
{
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


/* Validation for Završi narudžbu form */

function formValidation()
{
	var uname = document.registration.uName;
	var uphone = document.registration.uphone;
	var uemail = document.registration.email;
	if(checkName(uname))
	{
		if(checkPhone(uphone)) 
		{	
			if (checkEmail(uemail)) 
			{
				alert ("Narudžba poslana.")
			}
		}
	}
	alert("Unesite ispravne podatke da biste naručili.")
	return false;
} 

function checkPhone(uphone)
{
	var uphoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
	if(uphone.value.match(uphoneno))
    {
    return true;
    }
	else
    {
    	alert("Unsite pravilan format. Ex: 000 - 111 - 222");
    return false;
    }
}

function checkName(uname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
	return true;
	}
	else
	{
	alert("Ime i prezime moraju sadržavati samo slova.");
	return false;
	}
}

function checkEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
	return true;
	}
	else
	{
	alert("Unesite pravilnu email adresu.");
	return false;
	}
}
