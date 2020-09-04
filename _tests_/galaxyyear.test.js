import  GalaxyYear from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  
  test('should return earth year age', () =>{
    const whatevers = new GalaxyYear(20);asdf
    expect(whatevers.earthAge).toEqual(20);
  });
  test ('Should return your Earth age of 10 years in 41.68 Mercury Years', ()=>{
    const earthAge = new GalaxyYear(10); 
    expect(earthAge.mercuryAge()).toEqual(41.68);
  });
});