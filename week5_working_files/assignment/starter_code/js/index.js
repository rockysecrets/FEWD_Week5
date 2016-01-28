var city = "nyc";

function newyorkcity() {
  if (city === "nyc") {
    $("body").addClass("austin");
  } else if (city === "austin") {
    $("body").addClass("nyc");
  } else if (city === "sf") {
    $("body").addClass("sf");
  } else if (city === "la") {
    $("body").addClass("la");
  }
}
