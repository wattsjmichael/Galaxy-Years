export function GalaxyYear(earthAge){
  this.earthAge = earthAge;

}

GalaxyYear.prototype.mercuryYears = function() {
  (this.earthAge / .28);
  return this.earthAge;
}


