import  GalacticAge from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  
  test('should return earth year age', () =>{
    let galacticAge = new GalacticAge(10);
    expect(galacticAge.earthYear).toEqual(10);
    console.log(galacticAge.earthYear);
  });
    
  test ('Should return your Earth age of 10 years in 41 Mercury Years', ()=>{
  const galacticAge= new GalacticAge(10); 
  expect(galacticAge.mercuryAge()).toEqual(41);
  });

});