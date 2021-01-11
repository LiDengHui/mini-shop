import { Sequelize, DataTypes, Optional, Model } from "sequelize";

export interface CategoryAttributes {
    id: number;
    name: string;
    topic_img_id: number;
}

export interface CategoryCreationAttributes
    extends Optional<CategoryAttributes, "id" | "name"> {}

export interface CategoryInstance
    extends Model<CategoryAttributes, CategoryCreationAttributes>,
        CategoryAttributes {}

// category 模型
export function categoryModelFactory(sequelize: Sequelize) {
    return sequelize.define<CategoryInstance, CategoryAttributes>("category", {
        id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(),
        },
        topic_img_id: {
            type: DataTypes.INTEGER(),
        },
    });
}
