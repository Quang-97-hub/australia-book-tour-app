
// function to get the data to session storage
    var getFirstName = sessionStorage.getItem("firstName");
    var getLastName = sessionStorage.getItem("lastName");
    var getEmail = sessionStorage.getItem("email");
    var getTourName = sessionStorage.getItem("tourName");
    var getNumberOfGuest = sessionStorage.getItem("numberOfGuest");
    var getArrivalDate = sessionStorage.getItem("arrivalDate");

    // add the data from sessionStorage to the value of confirmation form for submission
    document.getElementById("cofirm-firstName").value = getFirstName;
    document.getElementById("confirm-lastName").value = getLastName;
    document.getElementById("confirm-email").value = getEmail;
    document.getElementById("confirm-tourName").value = getTourName;
    document.getElementById("confirm-numberOfGuest").value = getNumberOfGuest;
    document.getElementById("confirm-ArrivalDate").value=getArrivalDate;

    // calculate the tour price based on tour selected and the number of guest
    var price_Litchfield_National_Park = 100;
    var price_Sunset_Hour_Cruise = 150;
    var price_Top_End_Safari_Camp = 100;
    var price_Katherine_Day_Tour = 250;
    var numberOfGuest = parseInt(getNumberOfGuest)
    var tourSelection = getTourName // get the tour select
    var tourPrice = 0;

    // calculate the price for each tour
    switch(tourSelection){
        case 'Litchfield National Park And Jumping Crocodile Cruise':
            tourPrice = price_Litchfield_National_Park * numberOfGuest;
            break;
        case 'Sunset Hour Cruise From Darwin With Dinner And Sparkling Wine': 
            tourPrice = price_Sunset_Hour_Cruise * numberOfGuest;
            break;
        case 'Top End Safari Camp Day Tour':
            tourPrice = price_Top_End_Safari_Camp * numberOfGuest;
            break;
        case 'Katherine Day Tour From Darwin Including Katherine Gorge Cruise':
            tourPrice = price_Katherine_Day_Tour * numberOfGuest;
            break;
    }

    document.getElementById("price").value = tourPrice; // print the result

    // // submit the form after user confimation
    var form = document.getElementById("confirm-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        swal({
            title: "Thank you for your booking",
            text: "The booking team will contact to you later.",
            icon: "success",
          });
        form.reset()
        // window.location.href = "booking.html";
        setTimeout("location.href = 'booking.html';",4000); // redirect to booking.html page after confirm the booking.
      }).catch(error => {
        swal({
            title: "Oops! There were a problem!",
            text: "Please check the information or your network",
            icon: "error",
          });
      });
    }
    form.addEventListener("submit", handleSubmit)

    
    
