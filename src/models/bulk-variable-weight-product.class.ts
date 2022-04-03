export class BulkVariableWeightProduct {
  mercaCode: number;
  controlDigit: number;
  price: number;
  pvp: number;
  weight: number;

  constructor(
    mercaCode: number,
    controlDigit: number,
    price: number,
    pvp: number,
    weight: number
  ) {
    this.mercaCode = mercaCode;
    this.controlDigit = controlDigit;
    this.price = price;
    this.pvp = pvp;
    this.weight = weight;
  }
}
