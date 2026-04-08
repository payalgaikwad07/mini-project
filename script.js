function validateForm() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === "") {
        document.getElementById("message").innerText = "Please fill all fields!";
        return false;
    }

    document.getElementById("message").innerText = "Login Successful!";
    return false;
}