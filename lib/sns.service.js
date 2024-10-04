"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sns_extras_1 = require("./sns.extras");
var SnsService = /** @class */ (function () {
    function SnsService() {
    }
    SnsService.init = function () {
        console.info("[SnsService] init");
        if (this._instance) {
            // Cannot have multiple instance of this service
            // User IAM Role(s) to authenticate multiple buckets...
            throw sns_extras_1.SnsError.ALREADY_INITIALIZED;
        }
        this._instance = new SnsService();
        return this._instance;
    };
    SnsService.prototype.verifyNewTopic = function (subscriptionURL) {
        return sns_extras_1.verifySubscription(subscriptionURL);
    };
    SnsService.prototype.parseS3Webhook = function (event, filePrefix) {
        var filesUploaded = [];
        if (!event.Records) {
            throw "RECORDS_MISSING";
        }
        var records = event.Records;
        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            if (!record.s3 || !record.s3.object || !record.s3.object.key) {
                continue;
            }
            if (!record.s3.object.key.startsWith(filePrefix)) {
                continue;
            }
            filesUploaded.push(record.s3.object.key.substr(filePrefix.length));
        }
        return filesUploaded;
    };
    return SnsService;
}());
exports.SnsService = SnsService;
//# sourceMappingURL=sns.service.js.map