describe('Example Component', () => {

  test('Debe de ser mayor a 10', () => {
    // FORMA NORMAL
    // // arreglar
    // let value = 5;
    // // estimulo
    // value = value + 2
    // // observar el resultado
    // if (value > 10) {
    //   // Todo bien
    // } else {
    //   throw `${value} no es mayor a 10`
    // }
    // FORMA DE TEST AUTOMATIZADOS
    // Arreglar
    let value = 10;

    // Estimulo
    value = value+2

    // Observar el resultado
    expect(value).toBeGreaterThan(10);
  })

})