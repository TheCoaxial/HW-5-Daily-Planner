
var hourValue = [parseInt($("#firstBlock").attr("data-hour")),
parseInt($("#secondBlock").attr("data-hour")),
parseInt($("#thirdBlock").attr("data-hour")),
parseInt($("#fourthBlock").attr("data-hour")),
parseInt($("#fifthBlock").attr("data-hour")),
parseInt($("#sixthBlock").attr("data-hour")),
parseInt($("#seventhBlock").attr("data-hour")),
parseInt($("#eigthBlock").attr("data-hour")),
parseInt($("#ninthBlock").attr("data-hour")),
];

var hourEl = [$("#9AM"),$("#10AM"),$("#11AM"),$("#12PM"),
$("#1PM"),$("#2PM"),$("#3PM"),$("#4PM"),$("#5PM")
];

$(document).ready(function(){
// display current day to top of calendar
   const time = moment().format("MMM Do YY");
   
   
    let currentDay = $("#currentDay");
    currentDay.text(time);

    aM = ' '


    $(".saveBtn").click(function(event){
        event.preventDefault();

        // Save data that user input

        localStorage.setItem("9AM", $("#9AM").val());

        aM = $("#9AM").val();

        $("#9AM").val(aM);
      
      

        console.log("hi");

    })

    $("#9AM").val(aM);

   
    

    var nowHours = moment().format('H');
    nowHours = parseInt(nowHours);
    console.log(nowHours);
    console.log(parseInt($("#ninthBlock").attr("data-hour")));
    
    
    for(let i = 0; i < hourValue.length; i++){

        if(nowHours > hourValue[i]) {
        console.log("higher");
        hourEl[i].addClass("past");
        
        }
        else if(parseInt(nowHours) === hourValue[i]){
        console.log("lower");
        hourEl[i].addClass("present");
        } else{
            hourEl[i].addClass("future");
        }

        

    }

})

// time blocks for standard business hours





// Track system time

// compare system time against calendar hour

// If the hour is before system time then apply past class to html element

// if the system time is equal to the calendar hour then apply present class

// if the system time is after calendar hour apply future class

// when the calendar hour reaches midnight reset all variables


