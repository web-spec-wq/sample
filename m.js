function validation() {
	// body...
var name=document.getElementById('one').value;
var surname=document.getElementById('two').value;
var email=document.getElementById('three').value;
var pass=document.getElementById('four').value;
var dob=document.getElementById('five').value;
var gender=document.getElementById('six').value;
var mob=document.getElementById('seven').value;
var zip=document.getElementById('eight').value;
var col=document.getElementById('nine').value;

if(name=="" || name==null){
	alert("enter the name");
	return false;

}
 if(surname=="" || surname==null){
	alert("enter the surname");
	return false;
}
 if(email=="" || email==null){
	alert("enetr the email");
	return false;
}
 if(pass=="" || pass==null || pass.length<8){
	alert("enter the correct password");
	return false;
}
 if(dob=="" || dob==null){
	alert("enter the date of birth");
	return false;
}
 if(gender=="" || gender==null ){
	alert("select gender");
	return false;
}
else if(mob=="" || mob==null){
	alert("enter the mobile number");
	return false;
}
 if(zip=="" || zip==null || zip.length!=6){
	alert("eneter the correct zip code");
	return false;

}
//  if(col!=yellow){
// 	alert("you selected a wrong color");
// 	return false;
// }
else{
	alert("sucess!!");
	return true;
}
}