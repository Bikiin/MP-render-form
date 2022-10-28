"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const getView = (path) => {
    return (0, path_1.normalize)((0, path_1.join)(__dirname, path));
};
exports.default = getView;
