import { EanLengthVariableproduct } from "./enums/ean-length-variable-product.enum";
import { EanTypePrefix } from "./enums/ean-type-prefix.enum";
import { NOT_VALID_ERROR } from "./errors/not-valid-code.error";
import { parseBulkVariableWeightProduct } from "./transforms/parse-bulk-variable-weight-product.transform";
import { parseMercadonaProduct } from "./transforms/parse-mercadona-product.transform";
import { parseVariableWeightProduct } from "./transforms/parse-variable-weight-product.transform";

export function eanParse(eanCode: string) {
  switch (parseInt(eanCode.substring(0, 2))) {
    case EanTypePrefix.MERCADONA_PRODUCT:
      return parseMercadonaProduct(eanCode);
    case EanTypePrefix.VARIABLE_WEIGHT_PRODUCT:
      if (eanCode.length === EanLengthVariableproduct.basic) {
        return parseVariableWeightProduct(eanCode);
      } else if (eanCode.length === EanLengthVariableproduct.bulk) {
        return parseBulkVariableWeightProduct(eanCode);
      }
    default:
      return NOT_VALID_ERROR;
  }
}
