$(document).ready(function() {});


function cityChange() {
  var city = $("#city-type").val();

  // console.log(city);


  if (city === "NYC" || city === "New York City" || city === "NY") {
    $("body").addClass("nyc");
    $("body").removeClass("sf", "la", "austin", "sydney");

    // console.log("nyc");

  } else if (city === "LA" || city === "LAX" || city === "Los Angeles") {
    $("body").removeClass("sf", "nyc", "austin", "sydney");
    $("body").addClass("la");

  } else if (city === "SF" || city === "San Francisco" || city === "Bay Area") {
    $("body").removeClass("nyc", "la", "austin", "sydney");
    $("body").addClass("sf");

  } else if (city === "ATX" || city === "Austin") {
    $("body").removeClass("sf", "la", "nyc", "sydney");
    $("body").addClass("austin");

  } else if (city === "SYD" || city === "Sydney") {
    $("body").removeClass("sf", "la", "austin", "nyc");
    $("body").addClass("sydney");

  } else {
    //something else that is not right
    alert("Error. Please input again.")
  }

  event.preventDefault();

}



$("#submit-btn").click(cityChange);
// $("#city-type").reset();
