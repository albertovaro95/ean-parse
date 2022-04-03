export class MercadonaProduct {
  mercaCode: number;
  controlDigit: number;

  constructor(mercaCode: number, controlDigit: number) {
    this.mercaCode = mercaCode;
    this.controlDigit = controlDigit;
  }
}
