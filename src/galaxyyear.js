export default class GalacticAge {
  constructor(earthYear) {
  this.earthYear = earthYear;
}




mercuryAge() {
  let mercuryYear = parseFloat(Math.abs((this.earthYear / .24).toFixed(2)));
  return mercuryYear;
}

venusAge() {
  let venusYear = parseFloat(Math.abs(this.earthYear / .62).toFixed(2));
  return venusYear;
}

marsAge() {
  let marsYear = parseFloat(Math.abs(this.earthYear / 1.88).toFixed(2));
  return marsYear;
}

jupiterAge() {
  let jupiterYear = parseFloat(Math.abs(this.earthYear / 11.86).toFixed(2));
  return jupiterYear;
}

mercuryLE() {
  let mercuryLife = (333.33)-(parseFloat(this.earthYear / .24));
  let mercuryLifeExpect = Math.abs(mercuryLife.toFixed(2));
  return mercuryLifeExpect;
}
venusLE() {
  let venusLife = (129.03)-(parseFloat(this.earthYear / .62));
  let venusLifeExpect = Math.abs(venusLife.toFixed(2));
  return venusLifeExpect;
}

marsLE() {
  let marsLife = (42.55)-(parseFloat(this.earthYear / 1.88));
  let marsLifeExpect = Math.abs(marsLife.toFixed(2));
  return marsLifeExpect;
}

jupiterLE() {
  let jupiterLife = (6.75)-(parseFloat(this.earthYear / 11.86));
  let jupiterLifeExpect = Math.abs(jupiterLife.toFixed(2));
  if (this.earthYear >= 80) {
    return `Congrats! you are ${jupiterLifeExpect} jupiter years over life expectancy!`
  } else {
  return jupiterLifeExpect;
  }
}

earthLE() {
  let earthLife = (80) - (this.earthYear);
  let earthLifeExpect = Math.abs(earthLife.toFixed(2));
  if (this.earthYear >= 80) {
    return `Congrats! you are ${earthLifeExpect} Earth years over life expectancy!`
  } else {
    return earthLifeExpect;
  }
}
}

