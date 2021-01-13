"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = __importStar(require("mysql"));
var SqlQueries = /** @class */ (function () {
    function SqlQueries() {
    }
    // var mysql = require('mysql');
    SqlQueries.prototype.mysqlConnect = function () {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "abcde",
            database: "school",
        });
    };
    SqlQueries.prototype.addTeacher = function (teacher) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var db = _this.mysqlConnect();
            db.query("INSERT INTO teacher(\n            age,\n            sex,\n            yearsOfExperience,\n            workedInUniversity,\n            canTeachSubjects,\n            teacherName)\n            VALUES(?,?,?,?,?,?)", [teacher.age, teacher.sex, teacher.yearsOfExperience, teacher.workedInUniversity, teacher.canTeachSubjects, teacher.teacherName], function (err, result) {
                if (err) {
                    return reject("Error at teacher: " + err);
                }
                resolve(result);
            });
        });
    };
    return SqlQueries;
}());
exports.default = SqlQueries;
//# sourceMappingURL=sql-queries.js.map