import  GalacticAge from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  
  test('should return earth year age', () =>{
    let galacticAge = new GalacticAge(10);
    expect(galacticAge.earthAge).toEqual(10);
    console.log(galacticAge.earthAge);
    
  // test ('Should return your Earth age of 10 years in 41.68 Mercury Years', ()=>{
  //   const earthAge = new GalaxyYear(10); 
  //   expect(earthAge.mercuryAge()).toEqual(41.68);
  // });
});
});