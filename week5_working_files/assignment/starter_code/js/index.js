$(document).ready(function() {});


function cityChange() {
  var city = $("#city-type").val();

  // resets the input form after submission
  $("#city-type").val('');

  // change all text to Lowercase
  // trim removes all white space

  city = city.toLowerCase().trim();

  // console.log(city);


  if (city === "nyc" || city === "new york city" || city === "ny") {
    $("body").attr("class", "nyc");
    // console.log("nyc");

  } else if (city === "la" || city === "lax" || city === "los angeles") {
    $("body").attr("class", "la");

  } else if (city === "sf" || city === "san francisco" || city === "bay area") {
    $("body").attr("class", "sf");

  } else if (city === "atx" || city === "austin") {
    $("body").attr("class", "austin");

  } else if (city === "syd" || city === "sydney") {
    $("body").attr("class", "sydney");

  } else {
    //something else that is not right
    alert("Error. Please input again.")
  }

  event.preventDefault();

}



$("#submit-btn").click(cityChange);
// $("#city-type").reset();
