function compSpeak(numInt) {
  var result = [];
  var numArray = [];
  for (i = 0; i <=numInt; i++) {
    var numString = i.toString();
    numArray.push(numString);
  }
  for (h = 0; h < numArray.length; h++) {
    var stringHolder = numArray[h];
    var intHolder = parseInt(numArray[h]);
    if (((intHolder % 3) === 0) && (intHolder != 0)) {
      result[h] = "I'm sorry, Dave. I'm afraid I can't do that";
    } else if (stringHolder.includes("1") === true) {
      result[h] = "BOOP!";
    } else if (stringHolder.includes("0") === true) {
      result[h] = "BEEP!";
    } else {
      result[h] = numArray[h];
    }
  }
  return result.join(" ... ");
}

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var userNumber = $("input#userNumber").val();
    var numInt = parseInt(userNumber);
    $("#output").hide();
    $("#proc1").hide();
    $("#proc2").hide();
    $("#output").text(compSpeak(numInt));
    $("#proc1").delay(900).fadeIn(100);
    $("#proc2").delay(2000).fadeIn(100);
    $("#output").delay(2800).fadeIn(100);
  });
});
