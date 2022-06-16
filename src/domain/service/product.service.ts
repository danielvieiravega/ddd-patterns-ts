import Product from "../entity/product";

export default class ProductService {
    static increasePrice(products: Product[], percentage: number): Product[] {
        products.forEach(product => {
            //Não curti, acho que o calculo tem que ser feito dentro do método da entidade
            product.changePrice((product.price * percentage) / 100 + product.price);
            // product.changePrice(20);
        });

        return products;
    }
}