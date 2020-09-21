export default class GalacticAge {
  constructor(earthYear) {
  this.earthYear = earthYear;
}

mercuryAge() {
  let earthYear = 20;
  let mercuryYear = parseFloat(Math.abs((earthYear / .24).toFixed(2)));
  return mercuryYear;
}

venusAge() {
  let earthYear = 20;
  let venusYear = parseFloat(Math.abs(earthYear / .62).toFixed(2));
  return venusYear;
}

marsAge() {
  let earthYear = 20;
  let marsYear = parseFloat(Math.abs(earthYear / 1.88).toFixed(2));
  return marsYear;
}

jupiterAge() {
  let earthYear = 20;
  let jupiterYear = parseFloat(Math.abs(earthYear / 11.86).toFixed(2));
  return jupiterYear;
}

mercuryLE() {
  let earthYear = 20;
  let mercuryLife = (333.33)-(parseFloat(earthYear / .24));
  let mercuryLifeExpect = Math.abs(mercuryLife.toFixed(2));
  return mercuryLifeExpect;
}
venusLE() {
  let earthYear = 20;
  let venusLife = (129.03)-(parseFloat(earthYear / .62));
  let venusLifeExpect = Math.abs(venusLife.toFixed(2));
  return venusLifeExpect;
}

marsLE() {
  let earthYear = 20;
  let marsLife = (42.55)-(parseFloat(earthYear / 1.88));
  let marsLifeExpect = Math.abs(marsLife.toFixed(2));
  return marsLifeExpect;
}

jupiterLE() {
  let earthYear = 20;
  let jupiterLife = (6.75)-(parseFloat(earthYear / 11.86));
  let jupiterLifeExpect = Math.abs(jupiterLife.toFixed(2));
  if (earthYear >= 80) {
    return `Congrats! you are ${jupiterLifeExpect} jupiter years over life expectancy!`
  } else {
  return jupiterLifeExpect;
  }
}
}

