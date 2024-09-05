import { KycIdType, KycStatus } from '../enums';
export declare class KycDocsDto {
    idDoc?: string;
    idType?: KycIdType;
    professionalCert?: string;
    idDocPublicId?: string;
    professionalCertPublicId?: string;
    status?: KycStatus;
}
