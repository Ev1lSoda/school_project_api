"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Ok = /** @class */ (function () {
    function Ok() {
        this.router = express_1.default.Router();
        this.initializeRoute();
    }
    Ok.prototype.initializeRoute = function () {
        this.router.get("", function (req, res) {
            res.status(200).json({ ok: true });
        });
    };
    return Ok;
}());
exports.default = Ok;
//# sourceMappingURL=ok.js.map