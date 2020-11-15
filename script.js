
//declare Variables
var reminderInput = hourEl;
var hourValue = [parseInt($("#firstBlock").attr("data-hour")),
parseInt($("#secondBlock").attr("data-hour")),
parseInt($("#thirdBlock").attr("data-hour")),
parseInt($("#fourthBlock").attr("data-hour")),
parseInt($("#fifthBlock").attr("data-hour")),
parseInt($("#sixthBlock").attr("data-hour")),
parseInt($("#seventhBlock").attr("data-hour")),
parseInt($("#eighthBlock").attr("data-hour")),
parseInt($("#ninthBlock").attr("data-hour")),
];

var hourEl = [$("#9AM"),$("#10AM"),$("#11AM"),$("#12PM"),
$("#1PM"),$("#2PM"),$("#3PM"),$("#4PM"),$("#5PM")
];

var reminders = ['','','','','','','','',''];


// creating function to initiate stored variables
function init(){
    var storedReminders = JSON.parse(localStorage.getItem("reminders"));

    if(storedReminders !== null){
        reminders = storedReminders;
    }

}

init();

for(let i = 0; i < hourEl.length; i++){
    hourEl[i].val(reminders[i]);
}

//Loading document
$(document).ready(function(){
// display current day to top of calendar
   const time = moment().format("MMM Do YY");
   
   
    let currentDay = $("#currentDay");
    currentDay.text(time);


   
    //Storing reminders
    function storeReminders(){
        localStorage.setItem("reminders", JSON.stringify(reminders));
    }
    
    //Functions to save the textarea text
    $("#firstHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[0].val();

        reminders[0]= reminderText;
        hourEl[0].value = "";

        storeReminders();


        console.log("hi");

    })
    
    $("#secondHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[1].val();

        reminders[1]= reminderText;
       hourEl[1].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#thirdHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[2].val();

        reminders[2]= reminderText;
       hourEl[2].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#fourthHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[3].val();

        reminders[3]= reminderText;
       hourEl[3].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#fifthHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[4].val();

        reminders[4]= reminderText;
       hourEl[4].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#sixthHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[5].val();

        reminders[5]= reminderText;
       hourEl[5].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#seventhHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[6].val();

        reminders[6]= reminderText;
       hourEl[6].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#eighthHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[7].val();

        reminders[7]= reminderText;
       hourEl[7].value = "";

        storeReminders();


        console.log("hi");

    })

    $("#ninthHour").click(function(event){
        event.preventDefault();

        // Save data that user input

        var reminderText = hourEl[8].val();

        reminders[8]= reminderText;
       hourEl[8].value = "";

        storeReminders();


        console.log("hi");

    })


    
    //Comparing system time vs data in the HTML elements
    var nowHours = moment().format('H');
    nowHours = parseInt(nowHours);
      
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

