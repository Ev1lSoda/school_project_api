"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var ok_1 = __importDefault(require("./routes/ok"));
var teachers_1 = __importDefault(require("./routes/teachers"));
var app = new server_1.default([
    {
        path: "/api/ok",
        cntr: new ok_1.default(),
    },
    {
        path: "/api/add/teacher",
        cntr: new teachers_1.default(),
    },
]);
app.listen();
//# sourceMappingURL=app.js.map