import path from "path";

export default {
    port: 3001,
    alias: {
        "/@/": path.resolve(__dirname, "./src"),
        "/components/": path.resolve(__dirname, "src/components"),
        "/assets/": path.resolve(__dirname, "src/assets"),
        "/pages/": path.resolve(__dirname, "src/pages"),
    },
    proxy: {
        "/api": {
            target: "http://localhost:8000/",
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/static": {
            target: "http://localhost:8000/",
            rewrite: (path) => path.replace(/^\/static/, ""),
        },
    },
};
