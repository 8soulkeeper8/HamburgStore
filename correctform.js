document.getElementById('logform').addEventListener("submit", checklogin);

function checklogin(event) {
    event.preventDefault();
    var log = document.getElementById('logform');
    var mail = log.loginmail.value;
    var pass = log.loginpass.value;

    if(pass.length <= 7 || pass.length >= 25){
        swal("Пароль должен содержать от 8 до 25 символов");
   }

}