// reduce the code for document.getElementById() => refactor code.
function getMyEle(ele) {
    return document.getElementById(ele);
}

// Purpose: Check what kind of uber that the user select.
// Return: the radio that the user selected.
function GetRegion(){ // when user click the radio button to choose the kind of car, this function will run.
    var userSelection;
    var sydneySelect = getMyEle('sydney').checked; // return true or false => take the result user choose for service.
    var melbourneSelect  = getMyEle('melbourne').checked; // refactore code
    var darwinSelect  = getMyEle('darwin').checked;
    var adelaideSelect  =getMyEle('adelaide').checked;
    var perthSelect  =getMyEle('perth').checked;
    var queenslandSelect  =getMyEle('queensland').checked;
    
    // to know what radio button user checked (which state)
    if(sydneySelect){ // sydeneySelect == truc => take the user selection as Sydney
        userSelection = "sydney";
    }
    else if(melbourneSelect){
        userSelection = "melbourne";
    }
    else if(darwinSelect){
        userSelection = "darwin";
    }
    else if(adelaideSelect){
        userSelection = "adelaide";
    }
    else if(perthSelect){
        userSelection = "perth";
    }
    else if(queenslandSelect){
        userSelection = "queensland";
    }

    return userSelection;
}

function calculateFee(){
    var numberOfDay = getMyEle('numberOfDay').value; // the datatype the we get is obj not number
    numberOfDay = parseInt(numberOfDay); // to convert from string value into the float value.
    var numberOfPerson = getMyEle('numberOfPerson').value; // the datatype the we get is obj not number
    
    numberOfPerson = parseInt(numberOfPerson); // to convert from string value into the float value.

    var displayFeeResult = getMyEle('displayFeeResult'); // get the <div> displayFeeResult.
    displayFeeResult.style.display = "block"; // display the price on the website => change style of element (css)
    // the style for <div> displayFeeResult
    displayFeeResult.style.background = "#47a8f3"; 
    displayFeeResult.style.color = "yellow";
    displayFeeResult.style.border = "solid 2px #47a8f3";

    var spanFeeResult = getMyEle('spanFeeResult'); // get the <span> to print fee result.


    

    // calculate fee for each state
    var regionSelection = GetRegion();

    // all of the avergage Fee hotel based on the Internet.
    var averHotelSydney = 121;
    var averHotelMelbourne = 148;
    var averHotelDarwin = 76;
    var averHotelAdelaide= 80;
    var averHotelPerth = 92;
    var averHotelQueensland = 80;

    var feeResult = 0;


    // The hotel feel for each state = (averge hotel fee this state) * (number of day for travel) * (number of person)
    switch(regionSelection){
        case 'sydney':
            feeResult = averHotelSydney * numberOfDay * numberOfPerson;
            break;
        case 'melbourne': 
            feeResult = averHotelMelbourne * numberOfDay * numberOfPerson;
            break;
        case 'darwin':
            feeResult = averHotelDarwin * numberOfDay * numberOfPerson; 
            break;
        case 'adelaide':
            feeResult = averHotelAdelaide * numberOfDay * numberOfPerson;
            break;
        case 'perth':
            feeResult = averHotelPerth * numberOfDay * numberOfPerson;
            break;
        case 'queensland':
            feeResult = averHotelQueensland * numberOfDay * numberOfPerson;
            break;
    }

    // Print the result to HTML
    spanFeeResult.innerHTML = feeResult;

}