export default function GalacticAge(earthYear, mercuryYear) {
  this.earthYear = earthYear;
  this.mercuryYear = mercuryYear;
}

GalacticAge.prototype.mercuryAge = function() {
  let earthYear = 10;
  let mercuryYear = parseInt(earthYear / .24);
  return mercuryYear;
}

 
