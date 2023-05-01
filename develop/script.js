// dayjs.extend(window.dayjs_plugin_advancedFormat);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

setInterval(function runningTime() {
  $('#currentDay').text(dayjs().format("MMM DD, YYYY hh:mm:ss"));
}, 1000);

var text = $(".description").val();

$("#saveButton").on("click", function(event) {
  event.preventDefault();
  console.log("saving");
  
  addEventToCalander(text)
  text.push(text);
  localStorage.setItem("text", JSON.stringify(text))
  // $(".description").append($("<p>").text(text))
})

var events = JSON.parse(localStorage.getItem("text"))

function addEventToCalander(text) {
  $(".description").append($("<p>").text(text)) || [];
}

text.forEach(function(text) {
  addEventToCalander(text);
})

var timeBlock = $(".time-block");
var timeNow = moment().hour();
function timeTrack() {
  
  if (timeBlock === timeNow) {
    $(this).addClass('present');
    $(this).removeClass('past');
    $(this).removeClass('future');
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

}


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

