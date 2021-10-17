var form = document.getElementById("my-form");

    
    async function handleSubmit(event) {
      event.preventDefault(); // prevent link to the form page (Form spree.com)
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        form.reset(); // reset the form
        status.style.display = "display"; // display the message
        status.style.color = "#4F8A10";
        status.style.background= "#DFF2BF";
        status.innerHTML = "Submit successfully ! Thank you."; // this message will be display if the user submitting successfully.
      }).catch(error => {
        status.style.display = "display"; // display the message.
        status.style.color = "#D8000C"; 
        status.style.background= "#FFD2D2";
        status.innerHTML = "Oops! There was a problem submitting your form" // this message will be shown if error in submit the form.
      });
    }
    form.addEventListener("submit", handleSubmit)