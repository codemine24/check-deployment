"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyRoutes = void 0;
const client_1 = require("@prisma/client");
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateFormData_1 = __importDefault(require("../../middlewares/validateFormData"));
const fileUploader_1 = require("../../utils/fileUploader");
const Property_controllers_1 = require("./Property.controllers");
const Property_validations_1 = require("./Property.validations");
const router = (0, express_1.Router)();
router.get("/", Property_controllers_1.PropertyControllers.getProperties);
router.post("/add-property", (0, auth_1.default)(client_1.UserRole.SUPER_ADMIN, client_1.UserRole.ADMIN), fileUploader_1.fileUploader.multipleUploadThroughApi.fields([
    { name: "feature_image", maxCount: 1 },
    { name: "images", maxCount: 10 },
]), (0, validateFormData_1.default)(Property_validations_1.PropertyValidations.createPropertyValidationSchema), Property_controllers_1.PropertyControllers.createProperty);
exports.PropertyRoutes = router;
