import  GalacticAge from "./../src/galaxyyear.js"


describe ('GalaxyYear', ()=> {
  
  test('should return earth year age', () =>{
    let galacticAge = new GalacticAge(10);
    expect(galacticAge.earthYear).toEqual(10);
    console.log(galacticAge.earthYear);
  });
    
  test ('Should return Earth age of 10 years as 41.68 Mercury Years', ()=>{
    let galacticAge= new GalacticAge(10); 
    expect(galacticAge.mercuryAge()).toEqual(41.67);
  });
  
  test("Should return Earth Age of 20 years as 32.26 Venus Years", ()=>{
    let galacticAge = new GalacticAge(20);
    expect(galacticAge.venusAge()).toEqual(32.26);
  });

  test("Should return Earth Age of 20 years as 10.64 Mars Years", ()=>{
    let galacticAge = new GalacticAge(20);
    expect(galacticAge.marsAge()).toEqual(10.64);
  });

  test("Should return Earth Age of 20 as 1.69 Jupiter Years", ()=> {
    let galacticAge = new GalacticAge(20);
    expect(galacticAge.jupiterAge()).toEqual(1.69);
  });

  test("Should convert Earth Age of 10 to Mercury Life Expentancy Years", ()=>{
    let galacticAge = new GalacticAge(10);
    expect(galacticAge.mercuryLE()).toEqual(333.33);
  });

});