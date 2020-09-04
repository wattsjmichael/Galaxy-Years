export default function GalacticAge(earthYear) {
  this.earthYear = earthYear;
}

GalacticAge.prototype.mercuryAge = function() {
  let earthYear = 20;
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

GalacticAge.prototype.jupiterAge = function() {
  let earthYear = 20
  let jupiterYear = parseFloat(Number(earthYear / 11.86).toFixed(2));
  return jupiterYear;
}

GalacticAge.prototype.mercuryLE = function() {
  let earthYear = 10;
  var mercuryLife = (333.33)-(parseFloat(earthYear / .24));
  var mercuryLife = Number(mercuryLife.toFixed(2));
  return mercuryLife;
}
GalacticAge.prototype.venusLE = function() {
  let earthYear = 20;
  var venusLife = (129.03)-(parseFloat(earthYear / .62));
  var venusLife = Number(venusLife.toFixed(2));
  return venusLife;
}

GalacticAge.prototype.marsLE = function() {
  let earthYear = 20;
  var marsLife = (42.55)-(parseFloat(earthYear / 1.88));
  var marsLife = Number(marsLife.toFixed(2));
  return marsLife;
}

GalacticAge.prototype.jupiterLE = function() {
  let earthYear = 20;
  var jupiterLife = (6.75)-(parseFloat(earthYear / 11.86));
  var jupiterLife = Number(jupiterLife.toFixed(2));
  return jupiterLife;
}



 
