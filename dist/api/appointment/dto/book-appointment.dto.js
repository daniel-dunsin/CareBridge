"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSessionDto = exports.SessionDto = void 0;
const decorators_1 = require("../../../shared/decorators");
const enums_1 = require("../enums");
class SessionDto {
}
exports.SessionDto = SessionDto;
__decorate([
    (0, decorators_1.IsDate)(false),
    __metadata("design:type", Date)
], SessionDto.prototype, "appointmentDate", void 0);
__decorate([
    (0, decorators_1.IsDate)(false),
    __metadata("design:type", Date)
], SessionDto.prototype, "startTime", void 0);
__decorate([
    (0, decorators_1.IsDate)(false),
    __metadata("design:type", Date)
], SessionDto.prototype, "endTime", void 0);
class BookSessionDto extends SessionDto {
}
exports.BookSessionDto = BookSessionDto;
__decorate([
    (0, decorators_1.IsEnum)(enums_1.AppointmentMode, false),
    __metadata("design:type", String)
], BookSessionDto.prototype, "mode", void 0);
//# sourceMappingURL=book-appointment.dto.js.map