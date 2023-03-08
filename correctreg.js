document.getElementById('regform').addEventListener("submit", checklogin);
function checklogin(event) {
    event.preventDefault();
    var reg = document.getElementById('regform')
    var pass = reg.regpass.value;

    if(pass.length <= 7 || pass.length >= 25){
        swal("Пароль должен содержать от 8 до 25 символов");
    }
}