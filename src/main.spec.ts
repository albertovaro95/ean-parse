import { NOT_VALID_ERROR } from "./errors/not-valid-code.error";
import { eanParse } from "./main";
import { BulkVariableWeightProduct } from "./models/bulk-variable-weight-product.class";
import { MercadonaProduct } from "./models/mercadona-product.class";
import { VariableWeightProduct } from "./models/variable-weight-product.class";

test("Mercadona Product Test", () => {
  const productMercadonaCorrect = eanParse("8480000278623");
  expect(productMercadonaCorrect instanceof MercadonaProduct).toBe(true);
  if (productMercadonaCorrect instanceof MercadonaProduct) {
    expect(productMercadonaCorrect.mercaCode).toBe(27862);
    expect(productMercadonaCorrect.controlDigit).toBe(3);
  }

  const productMercadonaError = eanParse("5580000278623");
  expect(productMercadonaError instanceof MercadonaProduct).toBe(false);
  expect(productMercadonaError).toBe(NOT_VALID_ERROR);
});

test("Variable Weight Product", () => {
  const variableWeightCorrect = eanParse("2369664001999");

  expect(variableWeightCorrect instanceof VariableWeightProduct).toBe(true);
  if (variableWeightCorrect instanceof VariableWeightProduct) {
    expect(variableWeightCorrect.mercaCode).toBe(69664);
    expect(variableWeightCorrect.price).toBe(1.99);
    expect(variableWeightCorrect.controlDigit).toBe(9);
  }
});

test("Bulk Variable Weight Product", () => {
  const variableWeightCorrect = eanParse("230036490033000165000542");

  expect(variableWeightCorrect instanceof BulkVariableWeightProduct).toBe(true);
  if (variableWeightCorrect instanceof BulkVariableWeightProduct) {
    expect(variableWeightCorrect.mercaCode).toBe(3649);
    expect(variableWeightCorrect.price).toBe(0.54);
    expect(variableWeightCorrect.pvp).toBe(1.65);
    expect(variableWeightCorrect.weight).toBe(0.33);
    expect(variableWeightCorrect.controlDigit).toBe(2);
  }
});
