import express from "express";

import { BannerModel, ImageModel, ProductModel } from "../models";
import { sendSuccess } from "../utils/res";

const BannerRouter = express.Router();

BannerRouter.get("/", async (req, res, next) => {
    const banners = await BannerModel.findAll({
        include: [
            {
                model: ImageModel,
            },
        ],
        attributes: {
            exclude: ["img_id"],
        },
    });

    sendSuccess(res, { banners });
});
export { BannerRouter };
