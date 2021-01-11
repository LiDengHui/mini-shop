import path from "path";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { ProductRouter } from "./routes/product";
import { BannerRouter } from "./routes/banner";
import { CategoryRouter } from "./routes/category";
import { ThemeRouter } from "./routes/theme";
import SwaggerDocument from "./swagger";
import { onLogger } from "./plugins/log";
// rest of the code remains same
const app = express();
const PORT = 8000;
onLogger(app);
app.use(express.static(path.join(__dirname, "../public")));

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(SwaggerDocument, {
        explorer: true,
    }),
);
app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.use("/product", ProductRouter);
app.use("/banner", BannerRouter);
app.use("/category", CategoryRouter);
app.use("/theme", ThemeRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
