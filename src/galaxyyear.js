export default function GalacticAge(earthYear, mercuryYear, venusYear, marsYear) {
  this.earthYear = earthYear;
  this.mercuryYear = mercuryYear;
  this.venusYear = venusYear;
  this.marsYear = marsYear;
}

GalacticAge.prototype.mercuryAge = function() {
  let earthYear = 10;
  let mercuryYear = parseFloat(Number((earthYear / .24).toFixed(2)));
  return mercuryYear;
}

GalacticAge.prototype.venusAge = function() {
  let earthYear = 20;
  let venusYear = parseFloat(Number(earthYear / .62).toFixed(2));
  return venusYear;
}

GalacticAge.prototype.marsAge = function() {
  let earthYear = 20
  let marsYear = parseFloat(Number(earthYear / 1.88).toFixed(2));
  return marsYear;
}



 
