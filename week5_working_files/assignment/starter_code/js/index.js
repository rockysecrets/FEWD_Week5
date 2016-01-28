function cityChange(){
  //get the value of input #a and input #b
  var city =  $("#city-type").val();

  // var comparison = $("#comparison");

  city = String(city);

if ( city === "nyc"){
  $("body").addClass("nyc");
}else if ( city === "la"){
$("body").addClass("la");
}else if ( city === "la"){
$("body").addClass("la");
  }else{
    //something else that is not right
    alert ("Please input")
  }
}

$( "#submit-btn" ).click(cityChange);
