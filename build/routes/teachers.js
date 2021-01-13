"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sql_queries_1 = __importDefault(require("../sql/sql-queries"));
var Teachers = /** @class */ (function () {
    function Teachers() {
        this.router = express_1.default.Router();
        this.sqlQueries = new sql_queries_1.default();
        this.initializeRoute();
    }
    Teachers.prototype.initializeRoute = function () {
        var _this = this;
        this.router.post("", function (req, res) {
            _this.sqlQueries.addTeacher(req.body.techer).then(function (rez) { return res.status(200).json({ ok: true, results: rez }); });
        });
    };
    return Teachers;
}());
exports.default = Teachers;
//# sourceMappingURL=teachers.js.map