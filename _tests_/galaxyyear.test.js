import  GalacticAge from "./../src/galaxyyear.js"


describe ('GalaxyAge', ()=> {
  let reusableGalaxyAge;
  beforeEach(()=>{
    reusableGalaxyAge = new GalacticAge(20,);

  });
  
  test('should show how beforeEach() works',()=>{
    console.log(reusableGalaxyAge);
  });

  test('should return earth year age', () =>{
    expect(reusableGalaxyAge.earthYear).toEqual(20);
    console.log(reusableGalaxyAge.earthYear);
  });
    
  test ('Should return Earth age of 20 years as 41.68 Mercury Years', ()=>{
    expect(reusableGalaxyAge.mercuryAge()).toEqual(83.33);
  });
  
  test("Should return Earth Age of 20 years as 32.26 Venus Years", ()=>{
    expect(reusableGalaxyAge.venusAge()).toEqual(32.26);
  });

  test("Should return Earth Age of 20 years as 10.64 Mars Years", ()=>{
    expect(reusableGalaxyAge.marsAge()).toEqual(10.64);
  });

  test("Should return Earth Age of 20 as 1.69 Jupiter Years", ()=> {
    expect(reusableGalaxyAge.jupiterAge()).toEqual(1.69);
  });

  test("Should convert Earth Age of 20 to Mercury Life Expentancy Years (333.33 Mercury Years)", ()=>{
    expect(reusableGalaxyAge.mercuryLE()).toEqual(250.00);
  });

  test("Should convert Earth Age of 20 to Venus Life Expentancy Years (129.03 Venus Years)", ()=>{
    expect(reusableGalaxyAge.venusLE()).toEqual(96.77);
  });

  test("Should convert Earth Age of 20 to Mars Life Expentancy Years (42.55 Mars Years)", ()=>{
    expect(reusableGalaxyAge.marsLE()).toEqual(31.91);
  });

  test("Should convert Earth Age of 20 to Jupiter Life Expentancy Years (6.75 Jupiter Years)", ()=>{
    expect(reusableGalaxyAge.jupiterLE()).toEqual(5.06);
  });
});