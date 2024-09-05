"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const common_1 = require("@nestjs/common");
function _transform(errors) {
    return errors
        .map((error) => error?.constraints ? Object.values(error.constraints) : [])
        .flat()[0];
}
class ValidationException extends common_1.BadRequestException {
    constructor(errors) {
        super({
            error: 'Validation Error',
            message: _transform(errors),
        });
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=validation.exception.js.map