"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaOptions = exports.DbMixins = void 0;
class DbMixins {
}
exports.DbMixins = DbMixins;
exports.schemaOptions = {
    timestamps: true,
    virtuals: true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
};
//# sourceMappingURL=db.const.js.map