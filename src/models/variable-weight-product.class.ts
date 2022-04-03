export class VariableWeightProduct {
  mercaCode: number;
  controlDigit: number;
  price: number;

  constructor(mercaCode: number, controlDigit: number, price: number) {
    this.mercaCode = mercaCode;
    this.controlDigit = controlDigit;
    this.price = price;
  }
}
