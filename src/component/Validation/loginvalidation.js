export default function loginValidation(userData) {

    let errors = {}
    let userid = userData.userid;
    let password = userData.userpass;
	let alphaNumericValidtion = /^[0-9a-zA-Z]+$/;
    let flag = true;
    if(name == null) {
        // document.getElementById("userNameValidateMsg").innerHTML = "Username cannot be empty";
        errors.userNameValidateMsg = "Username cannot be empty";
		flag = false;
    }
   if(!name.match(alphaNumericValidtion)) {
        // document.getElementById("userNameValidateMsg").innerHTML = "Username is not allowed with special characters";
        errors.userNameValidateMsg = "Username is not allowed with special characters";
		flag = false;
    }
    // Password Validation
    if(password.length <= 6) {
        // document.getElementById("password").innerHTML="Password should be atleast 6 characters";
        errors.passFlag = false;
    } else {
        document.getElementById("password").innerHTML = "";
        passFlag = true;
    }
	if(password.length < 4) {
        errors.pwdValidateMsg = "Password should be atleast 4 characters";
		// document.getElementById("pwdValidateMsg").innerHTML = "Password should be atleast 4 characters";
		flag = false;
    }
	 if(flag){
         window.location.href="/summary";
     }
    return errors;
}

function loginValidation() {
    let userid = document.getElementById('user-id').value;
    let password = document.getElementById('user-pass').value;
    let passFlag, idFlag;

    // Password Validation
    if(password.length <= 6) {
        document.getElementById("password").innerHTML="Password should be atleast 6 characters";
        passFlag = false;
    } else {
        document.getElementById("password").innerHTML = "";
        passFlag = true;
    }

    // Username Validation
    if(userid == null || userid == "") {
        document.getElementById("Empid").innerHTML="Employee Id cannot be Empty";
        idFlag = false;
        console.log("Empty ID");
    } else if(!/^[0-9]+$/.test(userid)) {
        document.getElementById("Empid").innerHTML="Employee Id should contain only Numbers";
        idFlag = false;
    }
    else {
        document.getElementById("Empid").innerHTML="";
        idFlag = true;
        console.log("Non-Numeric");
    }
    
    if(idFlag && passFlag) {
        location.href="view_claim.html";
    }
    setTimeout(() => { maskClaimNumber(); }, 100);
}
