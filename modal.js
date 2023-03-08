var lastClickTime = 0;
var link = document.getElementById("sup");

link.addEventListener('click', function(event) {
  event.preventDefault();

  var currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 300000) { // проверяем прошло ли меньше 5 минут с последнего нажатия
    swal({
      title: "Sorry, you can't request the operator again now!",
      text: "Please wait for 5 minutes to request again.",
      icon: "warning",
      button: "OK",
    });
    return;
  }

  swal({
    title: "Request an operator call?",
    text: "Confirm that the operator will call you. The call will be received in no more than 5 minutes",
    icon: "info",
    buttons: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("The operator will call you back within 5 minutes, thanks for waiting!", {
        icon: "success",
      });
      lastClickTime = currentTime; // сохраняем время последнего нажатия
    } else {
      swal("Thank you for not loading the operators!");
    }
  });
});

var lastClickTime = 0;
var link = document.getElementById("supnav");

link.addEventListener('click', function(event) {
  event.preventDefault();

  var currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 300000) { // проверяем прошло ли меньше 5 минут с последнего нажатия
    swal({
      title: "Sorry, you can't request the operator again now!",
      text: "Please wait for 5 minutes to request again.",
      icon: "warning",
      button: "OK",
    });
    return;
  }

  swal({
    title: "Request an operator call?",
    text: "Confirm that the operator will call you. The call will be received in no more than 5 minutes",
    icon: "info",
    buttons: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("The operator will call you back within 5 minutes, thanks for waiting!", {
        icon: "success",
      });
      lastClickTime = currentTime; // сохраняем время последнего нажатия
    } else {
      swal("Thank you for not loading the operators!");
    }
  });
});
