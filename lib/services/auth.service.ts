import { handleAxiosErrorWithToast } from "../config/axios-error";
import { publicApi } from "../config/axios-instance";
import { toastSuccess } from "../utils/toast";
import { IDoctorRegister, IPatientRegister } from "../types";

export const userRegister = async ({
  data,
  type,
}: {
  data: IDoctorRegister | IPatientRegister;
  type: "patient" | "doctor";
}) => {
  try {
    const res = await publicApi.post(`/auth/signup/${type}`, data);

    toastSuccess("Account created.");
    return res.data;
  } catch (err) {
    handleAxiosErrorWithToast(err);
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const { data } = await publicApi.post("/auth/forgot-password", { email });

    toastSuccess("Reset link sent to " + email);
    return data;
  } catch (err) {
    handleAxiosErrorWithToast(err);
  }
};
