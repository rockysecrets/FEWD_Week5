function compareNumbers() {
  //get the values of input #a and input #b
  var a = $("#a").val();
  var b = $("#b").val();

  // converts strings to numbers
a = parseFloat (a);
b = parseFloat (b);

  // getting and storing #comparison as var comparison to be used later
  var comparison = $("#comparison");
console.log(typeof a, typeof b)
  // if a is greater than b

  if (a > b) {
    comparison.html('>');
    //.html(); changes the html to a string
  }
  // if a is smaller than b
  else if (a < b) {
    //then do something
    comparison.html('<');
  }
  // if a is same as b
  else if (a === b) {
    comparison.html('=');
    //then do something
  }
  // if it doesnt apply to any of above,
  else {
    comparison.html('NaN');

  }
}
$("#submit").click(compareNumbers);
