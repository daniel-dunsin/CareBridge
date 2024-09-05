import { authApi } from "../config/axios-instance";
import { ApiResponse, IUser } from "../types";

export const getUser = async () => {
  try {
    const { data } = await authApi.get<ApiResponse<IUser>>("/user");

    return data.data;
  } catch (err) {
    // handleAxiosErrorWithToast(err);
  }
};
