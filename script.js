//sources
// https://www.udemy.com/course/jquery-tutorial/learn/lecture/4934588#overview
//https://api.jquery.com/each/
// https://github.com/SnubStumpy2007/Week-4/blob/main/script.js


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Project Requirements for convience
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// flexbox and custom styling.
$(function () {
    // current day
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));

    // defining variables using a find() method.
   // function for nine o-clock
   // first define variables for each of the elements.
   // text area and 
   $("#form").find("#hour-9").each(function() {
    var textArea = $(this).find("textarea");
    var saveBtn = $(this).find("#saveBtnNine");

    saveBtn.click(function() {
        var textContentNine = textArea.val();
        $("#nineText").val(textContentNine);
        console.log(textContentNine);

        const result = JSON.parse(localStorage.getItem('result')) || [];
        result.push(textContentNine);
        localStorage.setItem('result', JSON.stringify(result));
        });
    });

 $("#form").find("#hour-10").each(function() {
    var textArea = $(this).find("textarea");
    var saveBtn = $(this).find("#saveBtnTen");

    saveBtn.click(function() {
        var textContentTen = textArea.val();
        $("#tenText").val(textContentTen);
        console.log(textContentTen);

        const result = JSON.parse(localStorage.getItem('result')) || [];
        result.push(textContentTen);
        localStorage.setItem('result', JSON.stringify(result));
        });
        
    });

     $("#form").find("#hour-11").each(function() {
    var textArea = $(this).find("textarea");
    var saveBtn = $(this).find("#saveBtnEleven");

    saveBtn.click(function() {
        var textContentEleven = textArea.val();
        $("#elevenText").val(textContentEleven);
        console.log(textContentEleven);

        const result = JSON.parse(localStorage.getItem('result')) || [];
        result.push(textContentEleven);
        localStorage.setItem('result', JSON.stringify(result));
        });
    });

});

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


  // Steps and what I did
  // 1.  Added date method citing one of our class activities
  // 2.  Link submit button to the jQuery file using an alert prompt.