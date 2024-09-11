"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookEvents = exports.PaymentStatus = void 0;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "Pending";
    PaymentStatus["SUCCESSFUL"] = "Successful";
    PaymentStatus["FAILED"] = "Failed";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var WebhookEvents;
(function (WebhookEvents) {
    WebhookEvents["TRANSACTION_SUCCESSFUL"] = "charge.success";
    WebhookEvents["TRANSACTION_FAILED"] = "charge.failed";
})(WebhookEvents || (exports.WebhookEvents = WebhookEvents = {}));
//# sourceMappingURL=index.js.map