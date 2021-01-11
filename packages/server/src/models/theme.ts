import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface ThemeAttributes {
    id: number;
    name: string;
    description: string;
    topic_img_id: number;
    head_img_id: number;
}

export interface ThemeCreationAttributes
    extends Optional<ThemeAttributes, "id" | "name"> {}

export interface ThemeInstance
    extends Model<ThemeAttributes, ThemeCreationAttributes>,
        ThemeAttributes {}

export function themeModelFactory(sequelize: Sequelize) {
    return sequelize.define<ThemeInstance, ThemeAttributes>("theme", {
        id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(),
        },
        description: {
            type: DataTypes.STRING(),
        },
        topic_img_id: {
            type: DataTypes.INTEGER(),
        },
        head_img_id: {
            type: DataTypes.INTEGER(),
        },
    });
}
