import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface ProductAttributes {
    id: number;
    name: string;
    price: number;
    stock: number;
    category_id: number;
    main_img_url: string;
}

export interface ProductCreationAttributes
    extends Optional<ProductAttributes, "id" | "name"> {}

export interface ProductInstance
    extends Model<ProductAttributes, ProductCreationAttributes>,
        ProductAttributes {}

export const definitionProduct = {
    id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(),
    },
    price: {
        type: DataTypes.FLOAT(),
    },
    stock: {
        type: DataTypes.INTEGER(),
    },
    category_id: {
        type: DataTypes.INTEGER(),
    },
    main_img_url: {
        type: DataTypes.STRING(),
    },
};
// // product 模型
export function productModelFactory(sequelize: Sequelize) {
    return sequelize.define<ProductInstance, ProductAttributes>(
        "product",
        definitionProduct
    );
}
