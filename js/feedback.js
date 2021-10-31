window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");


  // Success and Error functions for after the form is submitted

  function success() {
    form.reset(); // reset the form

  // the alert box message to let the user know they has submit successfully
      swal({
        title: "Submit successfully ! Thank you.",
        text: "Your feeback has been sent to support team",
        icon: "success",
      });
  }

  function error() {
    // the alert box message to let the user know they has submit with some error
    swal({
        title: "Oops! There were a problem!",
        text: "Please filled the form and submit again",
        icon: "error",
      });
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    var comment = document.getElementById("comment").value;
    // for check uer input the comment box or not.
    if(comment == 0){
      error()
    }
    // will submit the form to Formspree
    else{
      ajax(form.method, form.action, data, success, error); 
    }
  });
});


// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}



