"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleRouter = void 0;
const sample_controller_1 = require("../controllers/sample.controller");
const express_1 = require("express");
class SampleRouter {
    constructor() {
        this.sampleController = new sample_controller_1.SampleController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/', this.sampleController.getSampleData);
        this.router.get('/:id', this.sampleController.getSampleDataById);
        this.router.post('/', this.sampleController.createSampleData);
    }
    getRouter() {
        return this.router;
    }
}
exports.SampleRouter = SampleRouter;
