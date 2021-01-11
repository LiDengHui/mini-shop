import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface productImageAttributes {
    id: number;
    img_id: number;
    order: number;
    product_id: number;
}

export interface productImageCreationAttributes
    extends Optional<productImageAttributes, "id"> {}

export interface productImageInstance
    extends Model<productImageAttributes, productImageCreationAttributes>,
        productImageAttributes {}

export function productImageModelFactory(sequelize: Sequelize) {
    return sequelize.define<productImageInstance, productImageAttributes>(
        "product_image",
        {
            id: {
                type: DataTypes.INTEGER(),
                primaryKey: true,
            },
            img_id: {
                type: DataTypes.INTEGER(),
            },
            order: {
                type: DataTypes.INTEGER(),
            },
            product_id: {
                type: DataTypes.INTEGER(),
            },
        }
    );
}
