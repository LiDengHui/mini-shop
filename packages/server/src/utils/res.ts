import { Response } from "express";
export const sendSuccess = (res: Response, data: object) => {
    return res.json({
        code: 200,
        message: "",
        data,
    });
};

export const sendError = (res: Response, code: number, message: string) => {
    return res.json({
        code,
        message,
    });
};
