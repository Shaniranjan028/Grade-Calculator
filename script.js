function Total() {
  var paper1 = parseFloat(document.getElementById("mth").value);
  var paper2 = parseFloat(document.getElementById("phy").value);
  var paper3 = parseFloat(document.getElementById("chem").value);
  var paper4 = parseFloat(document.getElementById("elec").value);
  var paper5 = parseFloat(document.getElementById("ct").value);

  if (
    paper1 > 100 ||
    paper2 > 100 ||
    paper3 > 100 ||
    paper4 > 100 ||
    paper5 > 100
  ) {
    alert("Please enter marks in range of 100");
  } else {
    var total = paper1 + paper2 + paper3 + paper4 + paper5;
    document.getElementById("total").innerHTML =
      "Maths Marks:" +
      "" +
      paper1 +
      "<br> Physics marks:" +
      "" +
      paper2 +
      "<br> Chemistry marks:" +
      "" +
      paper3 +
      "<br> Electronics marks:" +
      "" +
      paper4 +
      "<br> Communication marks:" +
      "" +
      paper5 +
      "<br>...........<br> Total Marks:" +
      "" +
      total;
  }
}

function Average() {
  var paper1 = parseFloat(document.getElementById("mth").value);
  var paper2 = parseFloat(document.getElementById("phy").value);
  var paper3 = parseFloat(document.getElementById("chem").value);
  var paper4 = parseFloat(document.getElementById("elec").value);
  var paper5 = parseFloat(document.getElementById("ct").value);

  if (
    paper1 > 100 ||
    paper2 > 100 ||
    paper3 > 100 ||
    paper4 > 100 ||
    paper5 > 100
  ) {
    alert("Please enter marks in range of 100");
  } else {
    var total = paper1 + paper2 + paper3 + paper4 + paper5;
    var avg = total / 5;
    document.getElementById("avg").innerHTML =
      "Your average marks is :" + "" + avg;
  }
}

function Grade() {
  var paper1 = parseFloat(document.getElementById("mth").value);
  var paper2 = parseFloat(document.getElementById("phy").value);
  var paper3 = parseFloat(document.getElementById("chem").value);
  var paper4 = parseFloat(document.getElementById("elec").value);
  var paper5 = parseFloat(document.getElementById("ct").value);

  if (
    paper1 > 100 ||
    paper2 > 100 ||
    paper3 > 100 ||
    paper4 > 100 ||
    paper5 > 100
  ) {
    alert("Please enter marks in range of 100");
  } else {
    var total = paper1 + paper2 + paper3 + paper4 + paper5;
    var avg = total / 5;

    if (avg >= 90 && avg <= 100) {
      document.getElementById("grd").innerHTML = "Your grade is A+";
    } else if (avg >= 80 && avg <= 89) {
      document.getElementById("grd").innerHTML = "Your grade is A";
    } else if (avg >= 70 && avg <= 79) {
      document.getElementById("grd").innerHTML = "Your grade is B+";
    } else if (avg >= 60 && avg <= 79) {
      document.getElementById("grd").innerHTML = "Your grade is B";
    } else if (avg >= 50 && avg <= 59) {
      document.getElementById("grd").innerHTML = "Your grade is C";
    } else if (avg >= 40 && avg <= 49) {
      document.getElementById("grd").innerHTML = "Your grade is D";
    } else {
      document.getElementById("grd").innerHTML = "You are Fail";
    }
  }
}
