import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface ThemeProductAttributes {
    theme_id: number;
    product_id: number;
}

export interface ThemeProductCreationAttributes
    extends Optional<ThemeProductAttributes, "theme_id"> {}

export interface ThemeProductInstance
    extends Model<ThemeProductAttributes, ThemeProductCreationAttributes>,
        ThemeProductAttributes {}

export function themeProductModelFactory(sequelize: Sequelize) {
    return sequelize.define<ThemeProductInstance, ThemeProductAttributes>(
        "theme_product",
        {
            theme_id: {
                type: DataTypes.INTEGER(),
            },
            product_id: {
                type: DataTypes.INTEGER(),
            },
        }
    );
}
