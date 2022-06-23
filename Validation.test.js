const { controle, generationEcriture, Periode } = require("./index.js");


test('date de fin antérieure à la date de début, même mois, même année', () => {
  periode01 = new Periode("periode01", "2021-01-08", "2021-01-05")
  expect(controle(periode01)).toBe("incohérent");
  expect(generationEcriture(periode01)).toStrictEqual("Les dates ne sont pas cohérentes pour calculer une période de congés");
});

test('date de fin antérieure à la date de début, même année', () => {
  periode01 = new Periode("periode01", "2021-02-02", "2021-01-05")
  expect(controle(periode01)).toBe("incohérent");
  expect(generationEcriture(periode01)).toStrictEqual("Les dates ne sont pas cohérentes pour calculer une période de congés");
});

test('date de fin antérieure à la date de début', () => {
  periode01 = new Periode("periode01", "2023-02-02", "2021-05-05")
  expect(controle(periode01)).toBe("incohérent");
  expect(generationEcriture(periode01)).toStrictEqual("Les dates ne sont pas cohérentes pour calculer une période de congés");
});

test('periode contenue dans 1 mois', () => {
  periode01 = new Periode("periode01", "2021-01-01", "2021-01-05")
  expect(controle(periode01)).toBe("unique");
  expect(generationEcriture(periode01)).toStrictEqual(["Période de congés du 01/01/2021 au 05/01/2021"]);
});

test('periode commençant et finissant le même jour', () => {
  periode01 = new Periode("periode01", "2021-01-01", "2021-01-01")
  expect(controle(periode01)).toBe("unique");
  expect(generationEcriture(periode01)).toStrictEqual(["Période de congés du 01/01/2021 au 01/01/2021"]);
  
});

test('periode à cheval sur 2 mois', () => {
  periode01 = new Periode("periode01", "2021-01-05", "2021-02-01")
  expect(controle(periode01)).toBe("multiple");
  expect(generationEcriture(periode01)).toStrictEqual(
    [
      "Période de congés du 05/01/2021 au 31/01/2021",
      "Période de congés du 01/02/2021 au 01/02/2021"
    ]
  );

});

test('periode à cheval sur 5 mois', () => {
  periode01 = new Periode("periode01", "2021-02-05", "2021-07-01")
  expect(controle(periode01)).toBe("multiple");
  expect(generationEcriture(periode01)).toStrictEqual(
    [
      "Période de congés du 05/02/2021 au 28/02/2021",
      "Période de congés du 01/03/2021 au 31/03/2021",
      "Période de congés du 01/04/2021 au 30/04/2021",
      "Période de congés du 01/05/2021 au 31/05/2021",
      "Période de congés du 01/06/2021 au 30/06/2021",
      "Période de congés du 01/07/2021 au 01/07/2021"
    ]
  );
});

test('periode à cheval sur 2 années', () => {
  periode01 = new Periode("periode01", "2021-12-05", "2022-01-10")
  expect(controle(periode01)).toBe("multiple");
  expect(generationEcriture(periode01)).toStrictEqual(
  [
    "Période de congés du 05/12/2021 au 31/12/2021",
    "Période de congés du 01/01/2022 au 10/01/2022"
  ]
  );
});


test('periode à cheval sur 3 années', () => {
  periode01 = new Periode("periode01", "2021-12-05", "2023-01-10")
  expect(controle(periode01)).toBe("multiple");
  expect(generationEcriture(periode01)).toStrictEqual(
    [
      "Période de congés du 05/12/2021 au 31/12/2021",
      "Période de congés du 01/01/2022 au 31/01/2022",
      "Période de congés du 01/02/2022 au 28/02/2022",
      "Période de congés du 01/03/2022 au 31/03/2022",
      "Période de congés du 01/04/2022 au 30/04/2022",
      "Période de congés du 01/05/2022 au 31/05/2022",
      "Période de congés du 01/06/2022 au 30/06/2022",
      "Période de congés du 01/07/2022 au 31/07/2022",
      "Période de congés du 01/08/2022 au 31/08/2022",
      "Période de congés du 01/09/2022 au 30/09/2022",
      "Période de congés du 01/10/2022 au 31/10/2022",
      "Période de congés du 01/11/2022 au 30/11/2022",
      "Période de congés du 01/12/2022 au 31/12/2022",
      "Période de congés du 01/01/2023 au 10/01/2023"
    ]
    );
});


test('periode à cheval sur 2 années commençant et finissant au même jour', () => {
  periode01 = new Periode("periode01", "2021-12-05", "2022-12-05")
  expect(controle(periode01)).toBe("multiple");
  expect(generationEcriture(periode01)).toStrictEqual(
    [
      "Période de congés du 05/12/2021 au 31/12/2021",
      "Période de congés du 01/01/2022 au 31/01/2022",
      "Période de congés du 01/02/2022 au 28/02/2022",
      "Période de congés du 01/03/2022 au 31/03/2022",
      "Période de congés du 01/04/2022 au 30/04/2022",
      "Période de congés du 01/05/2022 au 31/05/2022",
      "Période de congés du 01/06/2022 au 30/06/2022",
      "Période de congés du 01/07/2022 au 31/07/2022",
      "Période de congés du 01/08/2022 au 31/08/2022",
      "Période de congés du 01/09/2022 au 30/09/2022",
      "Période de congés du 01/10/2022 au 31/10/2022",
      "Période de congés du 01/11/2022 au 30/11/2022",
      "Période de congés du 01/12/2022 au 05/12/2022"
    ]
  );
});