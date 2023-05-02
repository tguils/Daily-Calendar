
$(document).ready(function() {

setInterval(function runningTime() {
  $('#currentDay').text(dayjs().format("MMM DD, YYYY hh:mm:ss"));
}, 1000);

var text = $(".description").val();

$(".saveBtn").on("click", function() {
  console.log("saving");
  var value = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  console.log(value);
  localStorage.setItem(hour, value)
})

var events = JSON.parse(localStorage.getItem("text"))

function addEventToCalander(text) {
  $(".description").append($("<p>").text(text)) || [];
}


var timeNow = dayjs().hour(); 
$(".time-block").each(function() {
const timeBlock = parseInt($(this).attr("id").split("-")[1])
  if (timeBlock === timeNow) {
    $(this).addClass('present');
  }
  else if (timeBlock < timeNow) {
    $(this).addClass('past');
    $(this).removeClass('present');
    $(this).removeClass('future');
  }
  else {
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  }

});


$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));

})
 