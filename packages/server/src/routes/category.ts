import express from "express";
import { CategoryModel, ImageModel, ProductModel } from "../models";
import { sendSuccess } from "../utils/res";

const CategoryRouter = express.Router();

CategoryRouter.get("/", async (req, res, next) => {
    let categories = await CategoryModel.findAll({
        include: [
            {
                model: ImageModel,
            },
            {
                model: ProductModel,
                include: [
                    {
                        model: ImageModel,
                    },
                ],
                attributes: {
                    exclude: ["price", "stock", "category_id", "main_img_url"],
                },
            },
        ],
        attributes: {
            exclude: ["topic_img_id"],
        },
    });

    sendSuccess(res, { categories });
});
export { CategoryRouter };
