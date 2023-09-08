import { ICsvRow } from "../../interfaces/csvRow";
import { IErrorDetail, IProductReturn } from "../../interfaces/errorDetail";
import Product from "../../database/models/Product";
import Pack from "../../database/models/Pack";

export abstract class Strategy {
  abstract validate(
    row: ICsvRow,
    product?: Product | Pack,
    csv?: ICsvRow[]
  ): IProductReturn;
}

export class ProductValidationService implements Strategy {
  validate(row: ICsvRow, product: Product): IProductReturn {
    const productReturn: IProductReturn = {
      code: row.product_code,
      name: product.name,
      oldPrice: Number(product.sales_price),
      newPrice: row.new_price,
      errors: [],
    };

    if (row.new_price < product.cost_price) {
      productReturn.errors.push(
        "Preço do produto não pode ser menor que o custo."
      );
    }

    if (row.new_price > product.cost_price * 1.1) {
      productReturn.errors.push(
        "Preço do produto não pode ser maior que 10% do custo."
      );
    }

    return productReturn;
  }
}

export class PackValidationService implements Strategy {
  validate(row: ICsvRow, pack: Pack, csv: ICsvRow[]): IProductReturn {
    
    const oldPrice = Math.floor(pack.products.reduce((acc, product) => {
      return acc + product.sales_price * product.PackProduct.qty;
    }, 0) * 100) / 100

    const packReturn: IProductReturn = {
      code: row.product_code,
      name: pack.name,
      oldPrice: oldPrice,
      newPrice: row.new_price,
      errors: [],
    };

    // verifica se algum produto do pacote está no array do csv
    const productsCsvInPack = csv.filter((row) => {
      return pack.products.some((product) => {
        return product.code === Number(row.product_code);
      });
    });

    if (productsCsvInPack.length !== pack.products.length) {
      packReturn.errors.push("Produto não encontrado no pacote.");
      return packReturn;
    }
    // somar o preço dos produtos do pacote com os do csv
    const packSum = productsCsvInPack.reduce((acc, row) => {
      return acc + Number(row.new_price);
    }, 0);
    
    if (row.new_price !== packSum) {
      packReturn.errors.push("Preço do pacote deve ser igual que a soma dos produtos.");
    }

    return packReturn;
  }
}
