var reverse = function() {
  var reverse = document.getElementById("reverse");
  var title2 = document.getElementById("title2");
  if (title2.innerHTML === "Miles to Kilometers") {
    title2.innerHTML = "Kilometers to Miles"
  } else {
    title2.innerHTML = "Miles to Kilometers"
  }
  //
  var conversionsubject = document.getElementById("conversionsubject");
  var solution = document.getElementById("solution");
  var title2 = document.getElementById("title2");
  var solutiontitle = document.getElementById("solutiontitle");
  var solutionofficial = document.getElementById("solutionofficial");
  var solutiontitle2 = document.getElementById("solutiontitle2");
  var unit1;
  var unit2;
  if (conversionsubject.value.length > 0) {
    if (title2.innerHTML === "Miles to Kilometers") {
      solution.style.visibility = "visible";
      if (conversionsubject.value === "1") {
        solutiontitle.innerHTML = conversionsubject.value + " mile is";
      } else {
        solutiontitle.innerHTML = conversionsubject.value + " miles is";
      }
      solutionofficial.innerHTML = conversionsubject.value * 1.6;
      solutiontitle2.innerHTML = "kilometers";
    } else {
      solution.style.visibility = "visible";
      if (conversionsubject.value === "1") {
        solutiontitle.innerHTML = conversionsubject.value + " kilometer is";
      } else {
        solutiontitle.innerHTML = conversionsubject.value + " kilometers is";
      }
      solutionofficial.innerHTML = conversionsubject.value * 0.62;
      solutiontitle2.innerHTML = "miles";
    }
  } else {
    solution.style.visibility = "hidden";
    solutiontitle.innerHTML = "";
    solutionofficial.innerHTML = "";
    solutiontitle2.innerHTML = "";
  }
}

var calculate = function() {
  var conversionsubject = document.getElementById("conversionsubject");
  var solution = document.getElementById("solution");
  var title2 = document.getElementById("title2");
  var solutiontitle = document.getElementById("solutiontitle");
  var solutionofficial = document.getElementById("solutionofficial");
  var solutiontitle2 = document.getElementById("solutiontitle2");
  var unit1;
  var unit2;
  if (conversionsubject.value.length > 0) {
    if (title2.innerHTML === "Miles to Kilometers") {
      solution.style.visibility = "visible";
      if (conversionsubject.value === "1") {
        solutiontitle.innerHTML = conversionsubject.value + " mile is";
      } else {
        solutiontitle.innerHTML = conversionsubject.value + " miles is";
      }
      var firstOne = conversionsubject.value * 1.6;
      var secondOne = firstOne.toFixed(2);
      solutionofficial.innerHTML = secondOne;
      solutiontitle2.innerHTML = "kilometers";
    } else {
      solution.style.visibility = "visible";
      if (conversionsubject.value === "1") {
        solutiontitle.innerHTML = conversionsubject.value + " kilometer is";
      } else {
        solutiontitle.innerHTML = conversionsubject.value + " kilometers is";
      }
      var thirdOne = conversionsubject.value * 0.62;
      var fourthOne = thirdOne.toFixed(2);
      solutionofficial.innerHTML = fourthOne
      solutiontitle2.innerHTML = "miles";
    }
  } else {
    solution.style.visibility = "hidden";
    solutiontitle.innerHTML = "";
    solutionofficial.innerHTML = "";
    solutiontitle2.innerHTML = "";
  }
}
