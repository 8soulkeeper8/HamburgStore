
function checklogin(reg) {
    var pass = reg.regpass.value;

    if(pass.length <= 7 || pass.length >= 25){
        swal("Пароль должен содержать от 8 до 25 символов");
    return false;}
        else {
            return true;
        }
}