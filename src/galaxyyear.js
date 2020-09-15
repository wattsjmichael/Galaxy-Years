export default class GalacticAge {
  constructor(earthYear) {
  this.earthYear = earthYear;
}

mercuryAge() {
  let earthYear = 20;
  let mercuryYear = parseFloat(Number((earthYear / .24).toFixed(2)));
  return mercuryYear;
}

venusAge() {
  let earthYear = 20;
  let venusYear = parseFloat(Number(earthYear / .62).toFixed(2));
  return venusYear;
}

marsAge() {
  let earthYear = 20;
  let marsYear = parseFloat(Number(earthYear / 1.88).toFixed(2));
  return marsYear;
}

jupiterAge() {
  let earthYear = 20;
  let jupiterYear = parseFloat(Number(earthYear / 11.86).toFixed(2));
  return jupiterYear;
}

mercuryLE() {
  let earthYear = 20;
  let mercuryLife = (333.33)-(parseFloat(earthYear / .24));
  let mercuryLifeExpect = Number(mercuryLife.toFixed(2));
  return mercuryLifeExpect;
}
venusLE() {
  let earthYear = 20;
  var venusLife = (129.03)-(parseFloat(earthYear / .62));
  var venusLifeExpect = Number(venusLife.toFixed(2));
  return venusLifeExpect;
}

marsLE() {
  let earthYear = 20;
  var marsLife = (42.55)-(parseFloat(earthYear / 1.88));
  var marsLifeExpect = Number(marsLife.toFixed(2));
  return marsLifeExpect;
}

jupiterLE() {
  let earthYear = 20;
  var jupiterLife = (6.75)-(parseFloat(earthYear / 11.86));
  var jupiterLifeExpect = Number(jupiterLife.toFixed(2));
  return jupiterLifeExpect;
}
}


 
