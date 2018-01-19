function isZero(num) {
  if (num.includes("0") === true) {
    return "Beep!";
  } else {
    return "Danger Will Robinson!";
  }
}

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = $("input#userNumber").val();
    var result = "";


    result = isZero(number);
    $("#output").text(result);

  });
});
