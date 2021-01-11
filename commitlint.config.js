module.exports = {
    extends: ["@commitlint/config-conventional"],
    config: {
        commitizen: {
            path: "./node_modules/cz-conventional-changelog",
        },
    },
};
