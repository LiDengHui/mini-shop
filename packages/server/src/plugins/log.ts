import { Application } from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";
export const onLogger = (app: Application) => {
    app.use(morgan("dev"));
    app.use(
        morgan("common", {
            stream: fs.createWriteStream(
                path.join(__dirname, "../../logs/access.log"),
                {
                    flags: "a",
                }
            ),
        })
    );
};
