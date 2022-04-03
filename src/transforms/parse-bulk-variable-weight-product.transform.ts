import { BulkVariableWeightProduct } from "../models/bulk-variable-weight-product.class";
import { formatMercaCode } from "../utils/format-merca-code.util";
import { formatPrice } from "../utils/format-price.util";
import { formatWeight } from "../utils/format-weight.util";

export function parseBulkVariableWeightProduct(
  eanCode: string
): BulkVariableWeightProduct {
  const mercaCode = formatMercaCode(eanCode.substring(3, 8));
  const pvp = formatPrice(eanCode.substring(13, 18));
  const price = formatPrice(eanCode.substring(18, 23));
  const weight = formatWeight(eanCode.substring(8, 13));
  const controlDigit = parseInt(eanCode.substring(23, 24));
  const product = new BulkVariableWeightProduct(
    mercaCode,
    controlDigit,
    price,
    pvp,
    weight
  );
  return product;
}
