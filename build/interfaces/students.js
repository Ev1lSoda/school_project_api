"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Students = void 0;
var Students = /** @class */ (function () {
    function Students() {
        this.classStudents = {
            student1: {},
            student2: {},
            student3: {},
        };
    }
    Students.prototype.getStudents = function () {
        return this.classStudents;
    };
    return Students;
}());
exports.Students = Students;
//# sourceMappingURL=students.js.map