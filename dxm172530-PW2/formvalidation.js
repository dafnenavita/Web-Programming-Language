window.onload = function () {
	document.getElementById("subc").onclick = myfunction;
function myfunction()
{
var name = document.getElementById("name").value;
var password = document.getElementById("pass").value;
var phone = document.getElementById("phone").value;
var mess;

if( name == "" || password == "" || phone == "")
{
 mess ="All fields are mandatory !";
 }
else if(password.length < 6 && name.length < 6 && isNaN(phone))
{
mess="Name should be atleast 6 characters!<br/> Password should be atleast 6 characters!<br/> Phone number should contain only numbers!";
}
else if(password.length < 6 && isNaN(phone))
{
mess="Password should be atleast 6 characters!<br/> Phone number should contain only numbers!";
}

else if(name.length < 6 && isNaN(phone))
{
mess="Name should be atleast 6 characters!<br/> Phone number should contain only numbers!";
}

else if(password.length < 6 && name.length < 6)
{ 
mess = "Name should be atleast 6 characters!<br/> Password should be atleast 6 characters!" ;
}
else if(name.length < 6 )
{ 
 mess = "Name should be atleast 6 characters!" ;
}
else if(password.length < 6)
{
 mess = "Password should be atleast 6 characters!" ;
 }
 
else if(isNaN(phone))
{
mess="Phone number should contain only numbers!";
}

else 
{ 
mess="Success!";
}

if(mess == "Success!")
{
 document.getElementById("message").className = "success";
}
else
{
  document.getElementById("message").className = "error";
}
document.getElementById("message").innerHTML = mess;
}
}
