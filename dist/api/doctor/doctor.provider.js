'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
            ? (desc = Object.getOwnPropertyDescriptor(target, key))
            : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.DoctorProvider = void 0;
const common_1 = require('@nestjs/common');
const doctor_service_1 = require('./doctor.service');
const mongoose_1 = require('mongoose');
const user_service_1 = require('../user/user.service');
const file_service_1 = require('../../shared/file/file.service');
const enums_1 = require('./enums');
const mail_service_1 = require('../../shared/mail/mail.service');
let DoctorProvider = class DoctorProvider {
  constructor(doctorService, userService, fileService, mailService) {
    this.doctorService = doctorService;
    this.userService = userService;
    this.fileService = fileService;
    this.mailService = mailService;
  }
  async getUserDoctor(userId) {
    const data = await this.doctorService.getDoctor({
      user: new mongoose_1.Types.ObjectId(userId),
    });
    if (!data) {
      throw new common_1.NotFoundException('Doctor profile not found');
    }
    return {
      success: true,
      message: 'Doctor profile fetched',
      data,
    };
  }
  async getDoctor(doctorId) {
    const data = await this.doctorService.getDoctor({ _id: doctorId });
    if (!data) throw new common_1.NotFoundException('Doctor not found');
    return {
      success: true,
      message: 'Doctor profile fetched',
      data,
    };
  }
  async updateDoctor(userId, updateDoctorDto) {
    const data = await this.doctorService.updateDoctor(
      { user: new mongoose_1.Types.ObjectId(userId) },
      updateDoctorDto,
    );
    if (!data) throw new common_1.NotFoundException('Doctor not found');
    await this.userService.updateUser({ _id: userId }, updateDoctorDto);
    return {
      success: true,
      message: 'Doctor Profile Updated',
      data,
    };
  }
  async updateKycDocuments(updateKycDto, userId) {
    const doctor = await this.doctorService.getDoctor({
      user: new mongoose_1.Types.ObjectId(userId),
    });
    if (!doctor)
      throw new common_1.NotFoundException('Doctor profile not found');
    if (doctor.kycVerified)
      throw new common_1.NotFoundException('Your Kyc info has been verified');
    const { url: idDoc, public_id: idDocPublicId } =
      await this.fileService.uploadResource(updateKycDto.idDoc);
    const { url: professionalCert, public_id: professionalCertPublicId } =
      await this.fileService.uploadResource(updateKycDto.professionalCert);
    const kyc = await this.doctorService.getDoctorKyc(doctor._id);
    await this.doctorService.updateKyc(
      {
        idDoc,
        idDocPublicId,
        professionalCert,
        professionalCertPublicId,
        idType: updateKycDto.idType,
        status: enums_1.KycStatus.PENDING,
      },
      doctor._id,
    );
    if (kyc.idDocPublicId) {
      await this.fileService.deleteResource(kyc.idDocPublicId);
    }
    if (kyc.professionalCertPublicId) {
      await this.fileService.deleteResource(kyc.professionalCertPublicId);
    }
    return {
      success: true,
      message: 'Kyc Docs uploaded successfully',
    };
  }
  async getDoctorKyc(doctorId) {
    const data = await this.doctorService.getDoctorKyc(doctorId);
    return {
      success: true,
      message: 'kyc info fetched',
      data,
    };
  }
  async verifyDoctorKyc(doctorId) {
    const data = await this.doctorService.updateDoctor(
      { _id: doctorId },
      { kycVerified: true },
    );
    await this.doctorService.updateKyc(
      { status: enums_1.KycStatus.SUCCESSFUL },
      doctorId,
    );
    await this.mailService.sendMail({
      to: data.user.email,
      subject: 'CareBridge: KYC Verification Successful',
      template: 'kyc-verification-successful',
      context: {
        firstName: data.user?.firstName,
      },
    });
    return {
      success: true,
      message: 'Kyc Verified',
    };
  }
  async rejectDoctorKyc(doctorId) {
    const data = await this.doctorService.updateDoctor(
      { _id: doctorId },
      { kycVerified: false },
    );
    await this.doctorService.updateKyc(
      { status: enums_1.KycStatus.FAILED },
      doctorId,
    );
    await this.mailService.sendMail({
      to: data.user.email,
      subject: 'CareBridge: KYC Verification Failed',
      template: 'kyc-verification-failed',
      context: {
        firstName: data.user?.firstName,
      },
    });
    return {
      success: true,
      message: 'Kyc Rejected',
    };
  }
  async getKycs(query) {
    const _query = {};
    if (query.status) {
      _query.status = query.status;
      delete query.status;
    }
    const data = await this.doctorService.getKycs(_query);
    return {
      success: true,
      message: 'Kycs fetched',
      data,
    };
  }
  async getDoctors(query) {
    const _query = {};
    if (query.search) {
      _query.search = query.search;
      delete query.search;
    }
    if (query.department) {
      _query.department = query.department;
      delete query.department;
    }
    if (query.kycVerified) {
      if (query.kycVerified === 'true') {
        _query.kycVerified = true;
      } else if (query.kycVerified === 'false') {
        _query.kycVerified = false;
      }
    }
    const data = await this.doctorService.getDoctors(_query);
    return {
      success: true,
      message: 'doctors fetched',
      data,
    };
  }
};
exports.DoctorProvider = DoctorProvider;
exports.DoctorProvider = DoctorProvider = __decorate(
  [
    (0, common_1.Injectable)(),
    __metadata('design:paramtypes', [
      doctor_service_1.DoctorService,
      user_service_1.UserService,
      file_service_1.FileService,
      mail_service_1.MailService,
    ]),
  ],
  DoctorProvider,
);
//# sourceMappingURL=doctor.provider.js.map
