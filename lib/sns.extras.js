"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rp = require("request-promise");
var SnsError;
(function (SnsError) {
    SnsError["ALREADY_INITIALIZED"] = "ERR_SnsError_LIBRARY_ALREADY_INITIALIZED";
})(SnsError = exports.SnsError || (exports.SnsError = {}));
exports.verifySubscription = function (subscriptionURL) {
    return Promise.resolve(rp.get(subscriptionURL));
};
//# sourceMappingURL=sns.extras.js.map