var button = document.getElementById("sup");
button.addEventListener('click', function(){
    swal({
        title: "Request an operator call?",
        text: "Confirm that the operator will call you. The call will be received in no more than 5 minutes",
        icon: "info",
        buttons: true,
        
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("The operator will call you back within 5 minutes, thanks for waiting!", {
            icon: "success",
          });
        } else {
          swal("Thank you for not loading the operators!") ;
        }
      });
})