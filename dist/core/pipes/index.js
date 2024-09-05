"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base64Pipe = exports.MongoIdPipe = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const regex_const_1 = require("../../shared/constants/regex.const");
class MongoIdPipe {
    transform(value, metadata) {
        const isValid = mongoose_1.Types.ObjectId.isValid(value);
        if (!isValid) {
            throw new common_1.BadRequestException('invalid mongo id');
        }
        return value;
    }
}
exports.MongoIdPipe = MongoIdPipe;
class Base64Pipe {
    transform(value, metadata) {
        const isValid = regex_const_1.default.base64.test(value);
        if (!isValid) {
            throw new common_1.BadRequestException('parse a valid base64 string');
        }
        return value;
    }
}
exports.Base64Pipe = Base64Pipe;
//# sourceMappingURL=index.js.map