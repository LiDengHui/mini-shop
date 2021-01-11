import express from "express";
import { ImageModel, ProductImageModel, ProductModel } from "../models";
import { sendSuccess } from "../utils/res";
const ProductRouter = express.Router();

/**
 *
 */
ProductRouter.get("/", async (req, res, next) => {
    const products = await ProductModel.findAll({
        include: [{ model: ImageModel }],
        limit: 10,
    });
    sendSuccess(res, { products });
});

ProductRouter.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const product = await ProductModel.findOne({
        include: [
            {
                model: ImageModel,
                attributes: {
                    exclude: ["id"],
                },
            },
            {
                model: ProductImageModel,
                include: [{ model: ImageModel }],
                attributes: {
                    exclude: ["id", "img_id", "product_id"],
                },
            },
        ],
        attributes: {
            exclude: ["category_id", "img_id"],
        },
        where: {
            id: id,
        },
    });
    sendSuccess(res, { product });
});
export { ProductRouter };
