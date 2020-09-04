import  GalacticAge from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  
  test('should return earth year age', () =>{
    let galacticAge = new GalacticAge(10);
    expect(galacticAge.earthYear).toEqual(10);
    console.log(galacticAge.earthYear);
  });
    
  test ('Should return your Earth age of 10 years in 41 Mercury Years', ()=>{
  let galacticAge= new GalacticAge(10); 
  expect(galacticAge.mercuryAge()).toEqual(41);
  });
  
  test("Should return your Earth Age of 20 years in 33 Venus Years")
  let galacticAge = new GalacticAge(20);
  expect(galacticAge.venusAge()).toEqual(33);

});