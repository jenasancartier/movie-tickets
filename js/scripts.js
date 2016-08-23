//business logic
function Ticket(title, time, age) {
  this.userTitle = title;
  this.userTime = time;
  this.userAge = age;
}

Ticket.prototype.calculatePrice = function() {
  var ticketPrice = 0;
  if (this.userMovie === "Suicide Squad") {
    debugger;
    ticketPrice += 3;
  } else if (this.userMovie === "Star Trek") {
    ticketPrice += 2;
  } else {
    ticketPrice += 1;
  }
  if (this.userTime === "Morning Matinee") {
    ticketPrice += 1;
  } else if (this.userTime === "Afternoon Matinee") {
    ticketPrice +=2;
  } else {
    ticketPrice += 15;
  }
  if (this.userAge === "Child" || this.userAge === "Senior") {
    ticketPrice += 1;
  } else {
    ticketPrice += 5;
  }
  return ticketPrice;
}


//user interface logic
$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();

    var inputTitle = $("#movie-title").val();
    var inputTime = $("#movie-time").val();
    var inputAge = $("#age-range").val();
    var newTicket = new Ticket(inputTitle, inputTime, inputAge);

    $(".output").show();
    $("#showTime").text(inputTime);
    $("#showTitle").text(inputTitle);
    $("#showPrice").text(newTicket.calculatePrice());
  });

});
