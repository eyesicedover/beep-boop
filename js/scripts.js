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
      result[h] = "I'm sorry, Dave. I'm afraid I can't do that.";
    } else if (stringHolder.includes("1") === true) {
      result[h] = "Boop!";
    } else if (stringHolder.includes("0") === true) {
      result[h] = "Beep!";
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
    
    $("#output").text(compSpeak(numInt));
  });
});
