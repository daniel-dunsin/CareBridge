import useUserInfo from "@/lib/hooks/useUserInfo";
import PatientGeneral from "./user/patient";
import DoctorGeneral from "./user/doctor";
import React from "react";

const General = () => {
  const { user } = useUserInfo();

  return <>{user && user.role === "patient" ? <PatientGeneral /> : <DoctorGeneral />}</>;
};

export default General;
