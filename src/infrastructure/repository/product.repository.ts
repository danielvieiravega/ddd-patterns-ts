import { where } from "sequelize/types";
import Product from "../../domain/entity/product";
import product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product-repository";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
    async create(entity: product): Promise<void> {
        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price
        });
    }
    async update(entity: product): Promise<void> {
        await ProductModel.update(
            {
            name: entity.name,
            price: entity.price
            },
            {
            where: {
                id: entity.id
            }})
    }
    async findById(id: string): Promise<product> {
        const productModel =  await ProductModel.findOne({where: {id: id}});

        return new Product(productModel.id, productModel.name, productModel.price);
    }
    async findAll(): Promise<product[]> {
        const productModels = await ProductModel.findAll();
        return productModels.map(productModel => 
            new Product(productModel.id, productModel.name, productModel.price));
    }

}