export class GalaxyYear (earthYears){
  this.earthYears = earthYears;

}

GalaxyYear.prototype.mercuryYears = function() {
  let mercuryYears = (earthYears / .28);
  return mercuryYears;
}