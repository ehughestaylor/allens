
var today = new Date(),
    // get user time in hours up to 24
    h = today.getHours(), 
    d = today.getDay();

// monday through friday open and close 
monFriOpen = 10;
monFriClose = 19.45;

satOpen = 10;
satClose = 18;

sunOpen= 11;
sunClose= 16.45; 

//Check day loop
if (d > 0 && d < 6){
    //if we are open 
    if (h >= monFriOpen && h < monFriClose){
        $( "#open-close" ).html( "<p>We are open until 7:45pm!<i class='fa fa-circle green-text'></i></p> " );
    } else{
        $( "#open-close" ).html( "<p>Sorry we are closed!<i class='fa fa-circle red-text'></i></p> " );
    }
} else if (d === 6){
    if (h >= satOpen && h < satClose){
        $( "#open-close" ).html( "<a>We are open until 6:00pm.</a>" );
    } else{
        alert('sorry we are closed');
    }
    //execute check time function for saturday
} else {
    //else it must be sunday
    if (h >= sunOpen && h < sunClose){
        $( "#open-close" ).html( "<a>We are open until 6:00pm.</a>" );
    } else{
        alert('sorry we are closed');
    }
}