import { VariableWeightProduct } from "../models/variable-weight-product.class";
import { formatMercaCode } from "../utils/format-merca-code.util";
import { formatPrice } from "../utils/format-price.util";

export function parseVariableWeightProduct(
  eanCode: string
): VariableWeightProduct {
  const mercaCode = formatMercaCode(eanCode.substring(2, 7));
  const price = formatPrice(eanCode.substring(7, 12));
  const controlDigit = parseInt(eanCode.substring(12, 13));
  const product = new VariableWeightProduct(mercaCode, controlDigit, price);
  return product;
}
