export default function GalacticAge(earthYear, mercuryYear, venusYear) {
  this.earthYear = earthYear;
  this.mercuryYear = mercuryYear;
  this.venusYear = venusYear
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



 
