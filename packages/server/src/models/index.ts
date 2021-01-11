import { Sequelize } from "sequelize";
import config from "../config/db";
import { bannerModelFactory } from "./banner";
import { categoryModelFactory } from "./category";

import { imageModelFactory } from "./image";
import { productModelFactory } from "./product";
import { productImageModelFactory } from "./product_image";
import { productPropertyModelFactory } from "./product_property";
import { themeModelFactory } from "./theme";
import { themeProductModelFactory } from "./theme_product";

export const sequelize = new Sequelize(config);

sequelize
    .authenticate()
    .then(() => {
        console.log("DataBase connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

export const BannerModel = bannerModelFactory(sequelize);
export const ImageModel = imageModelFactory(sequelize);
export const ProductModel = productModelFactory(sequelize);
export const ThemeModel = themeModelFactory(sequelize);
export const ThemeProductModel = themeProductModelFactory(sequelize);
export const CategoryModel = categoryModelFactory(sequelize);
export const ProductImageModel = productImageModelFactory(sequelize);
export const ProductPropertyModel = productPropertyModelFactory(sequelize);

BannerModel.belongsTo(ImageModel, {
    foreignKey: "img_id",
    targetKey: "id",
});

// theme关系
ThemeModel.belongsTo(ImageModel, {
    foreignKey: "head_img_id",
    targetKey: "id",
});
ThemeModel.belongsToMany(ProductModel, {
    through: ThemeProductModel,
    foreignKey: "theme_id",
});

// product关系
ProductModel.belongsTo(ImageModel, {
    foreignKey: "img_id",
    targetKey: "id",
});
ProductModel.belongsTo(CategoryModel, {
    foreignKey: "category_id",
    targetKey: "id",
});
ProductModel.belongsToMany(ThemeModel, {
    through: ThemeProductModel,
    foreignKey: "product_id",
});
ProductModel.hasMany(ProductImageModel, {
    foreignKey: "product_id",
    sourceKey: "id",
});

// 目录关系
CategoryModel.belongsTo(ImageModel, {
    foreignKey: "topic_img_id",
    targetKey: "id",
});
CategoryModel.hasMany(ProductModel, {
    foreignKey: "category_id",
    sourceKey: "id",
});

ProductImageModel.belongsTo(ProductModel, {
    foreignKey: "product_id",
    targetKey: "id",
});
ProductImageModel.belongsTo(ImageModel, {
    foreignKey: "img_id",
    targetKey: "id",
});
