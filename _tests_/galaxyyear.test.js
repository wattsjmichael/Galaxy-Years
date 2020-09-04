import  GalaxyYear from "./../src/galaxyyear.js"

describe ('GalaxyYear', ()=> {
  test('should return earth year age', () =>{
    let earthAge = 20;
    expect(earthAge).toEqual(20);
    console.log(earthAge)

});
  
});
//   test("should return 41.68 Mercury Years if your 10 Earth Years old")
//     expect(GalaxyYear.mercuryYears(10)).toBe(41.68)

// });