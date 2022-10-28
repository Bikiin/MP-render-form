"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller"));
exports.default = (0, express_1.Router)()
    .get('/', controller_1.default.index)
    .get('/crear-usuario', controller_1.default.form)
    .get('*', controller_1.default.notFound);
