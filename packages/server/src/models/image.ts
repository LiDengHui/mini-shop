import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface ImageAttributes {
    id: number;
    url: string;
}

export interface ImageCreationAttributes
    extends Optional<ImageAttributes, "id"> {}

export interface ImageInstance
    extends Model<ImageAttributes, ImageCreationAttributes>,
        ImageAttributes {}

export function imageModelFactory(sequelize: Sequelize) {
    return sequelize.define<ImageInstance, ImageAttributes>("image", {
        id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
        },
        url: {
            type: DataTypes.STRING(),
        },
    });
}
