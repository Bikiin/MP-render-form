"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../services/index"));
const index = (_req, res) => res.sendFile((0, index_1.default)('../views/index.html'));
const form = (_req, res) => res.sendFile((0, index_1.default)('../views/form.html'));
const notFound = (_req, res) => res.sendFile((0, index_1.default)('../views/notFound.html'));
exports.default = {
    index,
    form,
    notFound
};
