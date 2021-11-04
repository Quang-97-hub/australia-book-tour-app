function Validation(){

    this.checkIsEmpty = function(inputVal, spanID, message) {
        // if user input error
        if(inputVal === "")
        {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false;
            
        }

        // if it validate
        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = message;
        return true;
    },

    this.checkIsCharecter = function(inputVal, spanID, message) {
        var pattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +

        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +

        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");

        // If it validate
        if(pattern.test(inputVal)){
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = message;
            return true;
        }
        
        // If it not validate
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false;
    },

    // Email user input
    this.isValidateEmail = function(inputVal, spanID, message) {
        var mailForm =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // if the email input validate
        if(inputVal.match(mailForm)) {
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = message;
            return true;
        }
        // if the email input is not validate
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false;

    },
    // check select the tour
    this.isTourSelected = function(inputVal,spanID, message) {
        // if the user no selecte the tour 
        if(inputVal=="") {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        
        document.getElementById(spanID).style.display = "none"
        document.getElementById(spanID).innerHTML = message;
        return true;

    }

    // // Arrival date user input 
    // this.isValidateArrivalDate = function(inputVal, spanID, message) {
    //     var systemdate = new Date()
    //     var currentDate = systemdate.getDate();
    //     var currentMonth = systemdate.getMonth();
    //     var currentYear = systemdate.getFullYear();
    // }
    
    // How many person
    this.isValidateNumberOfGuest = function(inputVal, spanID, message) {

         // if the number of guest user input validate
        //  the number of guest user input should be > 0 and < 50

        if(parseInt(inputVal) > 0 && parseInt(inputVal) < 50){
            document.getElementById(spanID).style.display = "none";
            document.getElementById(spanID).innerHTML = message;
            return true;
        }
        document.getElementById(spanID).style.display = "block";
        document.getElementById(spanID).innerHTML = message;
        return false;
        // if the number of guest user input not validate
        
    },
    
    // Arrvial date validation
    this.isNotInputedArrivalDate = function(inputVal, spanID, message) {
        // user not input the arrival date
        if(inputVal == ""){
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
        
        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = message;
        return true;
    }

    // function isDateBeforeToday(inputVal,spanID, message) {
    //     // return new Date(inputVal.toDateString()) < new Date(new Date().toDateString());
    //     inp
    //     alert(inputVal.toDateString());
    //     if(new Date(inputVal).valueOf() < new Date().valueOf()){
    //         document.getElementById(spanID).style.display = "block";
    //         document.getElementById(spanID).innerHTML = message;
    //         return false;
    //     }
    // }
    
    // isDateBeforeToday(new Date());



    

}
