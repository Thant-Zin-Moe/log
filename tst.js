
document.getElementById("sign").addEventListener("click", function () {
    const email = document.myform.mail.value;
    const pass = document.myform.password.value;
    if (email != '' && pass != '') {
        document.myform.error.value = "Thank you!";
    } else {
        document.myform.error.value = "Please fill all fields!";
        if (email == '') {
            document.myform.mail.focus();
        } else if (pass == '') {
            document.myform.password.focus();
        }
    }
});
