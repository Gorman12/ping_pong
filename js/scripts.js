// Business logic

function numbers(e) {
  var output = [];
  for (var i=1; i<=e; i++) {
    if (i%3 === 0) {
      output.push("ping")
    } else if (i%5 === 0) {
      output.push("pong")
    }else {
      output.push(i);
    }
  }
  return output;
};




// User logic
$(document).ready(function() {
  $("#a").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#userInput").val());
    var result = numbers(input);
    $("#result").text(result);
  });
});
