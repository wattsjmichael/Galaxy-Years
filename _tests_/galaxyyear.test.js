import  GalaxyYear from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  test('should return earth year age', () =>{
    let earthAge = 20;
    expect(earthAge).toEqual(20);
  });
  test ('Should return your Earth age of 10 years in 41.68 Mercury Years', ()=>{
    expect(mercuryAge).toEqual(41.68);
  });
});