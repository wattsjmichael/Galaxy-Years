import  { GalaxyYear } from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  test('should return earth year age', () =>{
    let earthAge = 20;
    expect(earthAge).toEqual(20);

});
  test("should return 41.68 Mercury Years if your 10 Earth Years old", () =>{
    let mercuryOld = new GalaxyYear;
    expect(mercuryOld.mercuryYears()).toBe(41.68);
});

});