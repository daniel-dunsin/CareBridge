export type KycID =
  | "National Identification Card"
  | "International Passport"
  | "Drivers License"
  | "Voters Card"
  | "Tax Identification Number";

export type Currency = "USD" | "NGN";

export type Role = "patient" | "doctor" | "admin";

export type Gender = "male" | "female";

export type ApiResponse<T = null> = {
  success: boolean;
  message: string;
  data: T;
};

export type IPatientRegister = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  password: string;
  yearsOfExperience: number;
};

export type IDoctorRegister = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  speciality: string;
  gender: string;
  yearsOfExperience: string;
  chargePerSession: number;
};

export type ILoginData = {
  emailOrPhone: string;
  password: string;
};

export type IDef = {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

export type ITokens = {
  accessToken: string;
  refreshToken: string;
  lifeSpan: number;
};

export type IUser = {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  gender: Gender;
  profilePicture: string;
  role: Role;
  meta: ITokens;
} & IDef;

export type KycStatus = "pending" | "failed" | "successful";

export type Kyc = {
  id: string;
  idDoc: string;
  idType: KycID;
  createdAt: string;
  updatedAt: string;
  professionalCert: string;
  idDocPublicId: string;
  professionalCertPublicId: string;
  status: KycStatus;
};

export type IPatient = {
  _id: string;
  user: IUser;
  favouriteDoctors: IDoctor[];
} & IDef;

export type IDoctor = {
  yearsOfExperience: number;
  speciality: string;
  qualifications: [];
  kycVerified: boolean;
  isAvailable: boolean;
  bio: string;
  availableDays: AvailableDay[];
  kycDetails: Kyc | null;
  _id: string;
  user: IUser;
  address?: Address;
  socials?: Socials;
  department: Department;
  chargePerSession: number;
} & IDef;

export type ChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export type Department =
  | "Cardiology (Heart)"
  | "Dentistry (Teeth and Oral Health)"
  | "Neurology (Nervous System)"
  | "Orthopedics (Musculoskeletal System)"
  | "Optometry (Eye and Vision Care)"
  | "Psychotherapy (Mental Health)"
  | "Nephrology (Kidneys)"
  | "Hepatology (Liver)"
  | "Dermatology (Skin)";

export type Socials = {
  facebook: string;
  whatsapp: string;
  twitter: string;
  linkedin: string;
};

export type AvailableDay = {
  day: string;
  startTime: string;
  endTime: string;
};

export type Address = {
  state: string;
  city: string;
  country: string;
};
