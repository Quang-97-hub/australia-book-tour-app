
// create the validation object
let validation = new Validation();
// To submit the form to the formspee
function submitForm(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var tourName = document.getElementById("tourName").value;
    var numberOfGuest = document.getElementById("numberOfGuest").value;
    var arrivalDate = document.getElementById("date").value;

    var isValid = true;

    // check validate for first name and last name 
    isValid &= validation.checkIsEmpty(firstName, "errFirstName", "The first name can not be empty.") &&
    validation.checkIsCharecter(firstName, "errFirstName", "The fist name must be a character");

   //check validate for and last name 
    isValid &= validation.checkIsEmpty(lastName, "errLastName", "The last name can not be empty.") &&
    validation.checkIsCharecter(lastName, "errLastName", "The last name must be the character");

    // check the validation for email
    isValid &= validation.checkIsEmpty(email, "errGmail", "The gmail can not be empty") &&
    validation.isValidateEmail(email, "errGmail", "You entered invalid email form");

    // Check for the tour name
    isValid &= validation.isTourSelected(tourName, "errTourName", "The tour name must be selected")

    // check for the number of guest
    isValid &= validation.checkIsEmpty(numberOfGuest, "errGuest", "The number of guest can not be empty") &&
    validation.isValidateNumberOfGuest(numberOfGuest, "errGuest", "The number of guest should be > 0 and < 50 guest")

    // check for the arrivalDate
    isValid &= validation.isNotInputedArrivalDate(arrivalDate, "errArrivalDate", "The arrival can not empty")

    if(isValid){
        // set the local storage to store the data
        sessionStorage.setItem("firstName", firstName);
        sessionStorage.setItem("lastName", lastName);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("tourName", tourName);
        sessionStorage.setItem("numberOfGuest", numberOfGuest);
        sessionStorage.setItem("arrivalDate", arrivalDate);

        document.getElementById("book_form").submit(); // submit the data to confimation page

    }

}

var btnBook = document.getElementById("btnBook");
btnBook.addEventListener("click", submitForm);
