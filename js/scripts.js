// function checker(num) {
//   for (h = 0; h < num.length; h++) {
//     if (num[h] === 1) {
//       return "Boop!";
//     } else if (num[h] === 0) {
//       return "Beep!";
//     } else {
//       return h;
//     }
//   }
// }

// function mapping(x) {
//   numArray.map(function(x))
// }

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();
    var number = $("input#userNumber").val();
    var numInt = parseInt(number);
    var numArray = [];
    var result = [];

    for (i = 0; i <=numInt; i++) {
      var numString = i.toString();
      numArray.push(numString);
    }
    debugger;

    for (h = 0; h < numArray.length; h++) {
      var stringHolder = numArray[h];
      if (stringHolder.includes("1") === true) {
        result[h] = "Boop!";
      } else if (stringHolder.includes("0") === true) {
        result[h] = "Beep!";
      } else {
        result[h] = h;
      }
    }


    $("#output").text(result);

  });
});
