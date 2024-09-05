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
