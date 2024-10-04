"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snsHeaderMiddleware = function (req, res, next) {
    if (req.headers["x-amz-sns-message-type"]) {
        req.headers["content-type"] = "application/json;charset=UTF-8";
    }
    next();
};
//# sourceMappingURL=sns-header.middleware.js.map