import { MercadonaProduct } from "../models/mercadona-product.class";
import { formatMercaCode } from "../utils/format-merca-code.util";

export function parseMercadonaProduct(eanCode: string): MercadonaProduct {
  const mercaCode = formatMercaCode(eanCode.substring(7, 12));
  const controlDigit = parseInt(eanCode.substring(12, 13));
  const mercadonaProduct = new MercadonaProduct(mercaCode, controlDigit);
  return mercadonaProduct;
}
