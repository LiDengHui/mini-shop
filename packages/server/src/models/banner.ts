import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface BannerAttributes {
    id: number;
    productsId: number;
    img_id: number;
}

export interface BannerCreationAttributes
    extends Optional<BannerAttributes, "id"> {}

export interface BannerInstance
    extends Model<BannerAttributes, BannerCreationAttributes>,
        BannerAttributes {}

export function bannerModelFactory(sequelize: Sequelize) {
    return sequelize.define<BannerInstance, BannerAttributes>("banner", {
        id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
        },
        productsId: {
            type: DataTypes.INTEGER(),
        },
        img_id: {
            type: DataTypes.INTEGER(),
        },
    });
}
