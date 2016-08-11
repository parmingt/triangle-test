function getTriangleType(side1, side2, side3){
  var type;
  if((side1 + side2) < side3 || (side1 + side3) < side2 || (side2 + side3) < side1){
    type = "not a triangle";
  }
  else if (side1 === side2 && side1 === side3){
    type = "equilateral";
  }
  else if(side1 === side2 || side1 === side3 || side2 === side3){
    type = "isosceles";
  }
  else {
    type = "scalene";
  }
  return type;
}

$(document).ready(function(){
  $("#calculate").click(function(event){
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var type = getTriangleType(side1, side2, side3);
    $("#triangleType").text(type);
  })
})
