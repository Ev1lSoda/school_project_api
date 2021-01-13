"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var Server = /** @class */ (function () {
    function Server(controllers) {
        dotenv_1.default.config();
        this.app = express_1.default();
        this.port = parseInt(process.env.PORT, 10);
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.initializeControllers(controllers);
    }
    Server.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) { return _this.app.use(controller.path, controller.cntr.router); });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App is listening on port " + _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
//# sourceMappingURL=server.js.map