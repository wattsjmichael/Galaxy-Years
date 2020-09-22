import  GalacticAge from "./../src/galaxyyear.js"


describe ('GalaxyAge', ()=> {
  let youngAge;
  let oldAge;
  beforeEach(()=>{
    youngAge = new GalacticAge(20);
    oldAge = new GalacticAge(90);

  });
  
  test('should show how beforeEach() works',()=>{
  });

  test('should return earth year age of 20', () =>{
    expect(youngAge.earthYear).toEqual(20);
  });
    
  test ('Should return Earth age of 20 years as 41.68 Mercury Years', ()=>{
    expect(youngAge.mercuryAge()).toEqual(83.33);
  });
  
  test("Should return Earth Age of 20 years as 32.26 Venus Years", ()=>{
    expect(youngAge.venusAge()).toEqual(32.26);
  });

  test("Should return Earth Age of 20 years as 10.64 Mars Years", ()=>{
    expect(youngAge.marsAge()).toEqual(10.64);
  });

  test("Should return Earth Age of 20 as 1.69 Jupiter Years", ()=> {
    expect(youngAge.jupiterAge()).toEqual(1.69);
  });

  test("Should convert Earth Age of 20 to Mercury Life Expentancy Years (250.00 Mercury Years)", ()=>{
    expect(youngAge.mercuryLE()).toEqual(250.00);
  });

  test("Should convert Earth Age of 20 to Venus Life Expentancy Years (96.77 Venus Years)", ()=>{
    expect(youngAge.venusLE()).toEqual(96.77);
  });

  test("Should convert Earth Age of 20 to Mars Life Expentancy Years (31.91 Mars Years)", ()=>{
    expect(youngAge.marsLE()).toEqual(31.91);
  });

  test("Should convert Earth Age of 20 to Jupiter Life Expentancy Years (5.06 Jupiter Years)", ()=>{
    expect(youngAge.jupiterLE()).toEqual(5.06);
  });



    
  test("Should Return an Earth Age of 90 to be .84 jupiter years over life expectancy", ()=>{
    expect(oldAge.jupiterLE()).toBe("Congrats! you are 0.84 jupiter years over life expectancy!");
    });

    test("Should Return an Earth Age of 90 to be 10 Earth years over life expectancy", ()=>{
      expect(oldAge.earthLE()).toBe("Congrats! you are 10 Earth years over life expectancy!");
    });

  });
