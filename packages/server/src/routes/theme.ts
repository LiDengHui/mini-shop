import express from "express";
import { ImageModel, ProductModel, ThemeModel } from "../models";
import { sendSuccess } from "../utils/res";

const ThemeRouter = express.Router();

ThemeRouter.get("/:id", async (req, res, next) => {
    const id = req.params.id;
    const theme = await ThemeModel.findOne({
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
                    exclude: [
                        "stock",
                        "category_id",
                        "main_img_url",
                        "topic_img_id",
                        "img_id",
                    ],
                },
            },
        ],
        attributes: {
            exclude: [
                "name",
                "head_img_id",
                "description",
                "topic_img_id",
                "theme_product",
            ],
        },
        where: {
            id: id,
        },
    });

    sendSuccess(res, { theme });
});
export { ThemeRouter };
