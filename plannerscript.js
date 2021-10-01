//  Global variables 
var currentDayEl
var timeBlocksEl = $(".container")

$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// Functions
// function displayTimeBlocks
// function displayCurrentDay

// function retrieveEvents

// var events = JSON.parse(localStorage.getItem("events"));



// var currentTime = moment ()

// // Hour variables 

// var hour1 = 


// var hour2 =
$(".saveBtn").on("click",function(){
    console.log ($(this).siblings("textarea"))
    var value= $(this).siblings("textarea").val()
    console.log (value)
    var timeEvent = $(this).siblings("textarea").attr("id")
    console.log(timeEvent)
    localStorage.setItem(timeEvent,value)
})

    $("#9").val(localStorage.getItem("9"))

    $("#10").val(localStorage.getItem("10"))

    $("#11").val(localStorage.getItem("11"))

    $("#12").val(localStorage.getItem("12"))

    $("#1").val(localStorage.getItem("1"))

    $("#2").val(localStorage.getItem("2"))

    $("#3").val(localStorage.getItem("3"))

    $("#4").val(localStorage.getItem("4"))

    $("#5").val(localStorage.getItem("5"))

    

    //  moment().hour()
// var hour3 =


// var hour4 =


// var hour5 =


// var hour6 =


// var hour7 =


// var hour8 =

