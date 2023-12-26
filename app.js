function signIn() {
    var firstName = document.getElementById("fName").value;
    var pass = document.getElementById("passward").value;

    console.log(firstName);
    console.log(pass);
}

let UserData = function(userName, lastName, email, passward){
    this.userName = userName
    this.lastName = lastName
    this.email = email
    this.passward = passward
}

function signUp() {
    var userName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var email = document.getElementById("emailId").value;
    var passward = document.getElementById("passward").value;

    var data = new UserData(userName, lastName, email, passward)
    console.log(data);


    // console.log(userName);
    // console.log(lastName);
    // console.log(email);
    // console.log(passward);
}