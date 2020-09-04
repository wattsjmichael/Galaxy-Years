import  GalacticAge from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  
  test('should return earth year age', () =>{
    let galacticAge = new GalacticAge(10);
    expect(galacticAge.earthYear).toEqual(10);
    console.log(galacticAge.earthYear);
  });
    
  test ('Should return your Earth age of 10 years in 41.68 Mercury Years', ()=>{
    let galacticAge= new GalacticAge(10); 
    expect(galacticAge.mercuryAge()).toEqual(41.67);
  });
  
  test("Should return your Earth Age of 20 years in 32.26 Venus Years", ()=>{
    let galacticAge = new GalacticAge(20);
    expect(galacticAge.venusAge()).toEqual(32.26);
  });
});