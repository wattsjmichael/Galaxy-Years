export default class GalacticAge {
  constructor(earthYear) {
  this.earthYear = earthYear;
}




mercuryAge() {
  let earthYear = this.earthYear;
  let mercuryYear = parseFloat(Math.abs((earthYear / .24).toFixed(2)));
  return mercuryYear;
}

venusAge() {
  let earthYear = this.earthYear;
  let venusYear = parseFloat(Math.abs(earthYear / .62).toFixed(2));
  return venusYear;
}

marsAge() {
  let earthYear = this.earthYear;
  let marsYear = parseFloat(Math.abs(earthYear / 1.88).toFixed(2));
  return marsYear;
}

jupiterAge() {
  let earthYear = this.earthYear;
  let jupiterYear = parseFloat(Math.abs(earthYear / 11.86).toFixed(2));
  return jupiterYear;
}

mercuryLE() {
  let earthYear = this.earthYear;
  let mercuryLife = (333.33)-(parseFloat(earthYear / .24));
  let mercuryLifeExpect = Math.abs(mercuryLife.toFixed(2));
  return mercuryLifeExpect;
}
venusLE() {
  let earthYear = this.earthYear;
  let venusLife = (129.03)-(parseFloat(earthYear / .62));
  let venusLifeExpect = Math.abs(venusLife.toFixed(2));
  return venusLifeExpect;
}

marsLE() {
  let earthYear = this.earthYear;
  let marsLife = (42.55)-(parseFloat(earthYear / 1.88));
  let marsLifeExpect = Math.abs(marsLife.toFixed(2));
  return marsLifeExpect;
}

jupiterLE() {
  let earthYear = this.earthYear;
  let jupiterLife = (6.75)-(parseFloat(earthYear / 11.86));
  let jupiterLifeExpect = Math.abs(jupiterLife.toFixed(2));
  if (this.earthYear >= 80) {
    return `Congrats! you are ${jupiterLifeExpect} jupiter years over life expectancy!`
  } else {
  return jupiterLifeExpect;
  }
}

earthLE() {
  let earthYear = this.earthYear;
  let earthLife = (80) - (earthYear);
  let earthLifeExpect = Math.abs(earthLife.toFixed(2));
  if (this.earthYear >= 80) {
    return `Congrats! you are ${earthLifeExpect} Earth years over life expectancy!`
  } else {
    return earthLifeExpect;
  }
}
}

