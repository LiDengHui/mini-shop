import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface ProductPropertyAttributes {
    id: number;
    name: string;
    detail: string;
    product_id: number;
}

export interface ProductPropertyCreationAttributes
    extends Optional<ProductPropertyAttributes, "id" | "name"> {}

export interface ProductPropertyInstance
    extends Model<ProductPropertyAttributes, ProductPropertyCreationAttributes>,
        ProductPropertyAttributes {}

export function productPropertyModelFactory(sequelize: Sequelize) {
    return sequelize.define<ProductPropertyInstance, ProductPropertyAttributes>(
        "product_property",
        {
            id: {
                type: DataTypes.INTEGER(),
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING(),
            },
            detail: {
                type: DataTypes.STRING(),
            },
            product_id: {
                type: DataTypes.INTEGER(),
            },
        }
    );
}
