//  Global variables 
var currentDayEl
var timeBlocksEl = $(".container")

$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

$(".saveBtn").on("click", function () {
    console.log($(this).siblings("textarea"))
    var value = $(this).siblings("textarea").val()
    console.log(value)
    var timeEvent = $(this).siblings("textarea").attr("id")
    console.log(timeEvent)
    localStorage.setItem(timeEvent, value)
})

// To display data from local storage in time blocks after refresh 

$("#9").val(localStorage.getItem("9"))

$("#10").val(localStorage.getItem("10"))

$("#11").val(localStorage.getItem("11"))

$("#12").val(localStorage.getItem("12"))

$("#1").val(localStorage.getItem("1"))

$("#2").val(localStorage.getItem("2"))

$("#3").val(localStorage.getItem("3"))

$("#4").val(localStorage.getItem("4"))

$("#5").val(localStorage.getItem("5"))



// Function to change time block colors according to time of day

function changeColor() {
    currentTime = moment().hours()
    $(".time-block").each(function () {
        
        var timeEvent = $(this).attr("id")

        if (currentTime == timeEvent) {
            $(this).addClass("present")
        } else if (currentTime < timeEvent) {
            $(this).addClass("future")
        } else {
            $(this).addClass("past")
        }

    })
}

changeColor()




