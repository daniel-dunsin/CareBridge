import Button from "@/components/Common/Button";
import {
  submitCardiologyReport,
  submitDentistryReport,
  submitHepatologyReport,
  submitOptometryReport,
} from "@/lib/services/report.service";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React, { FC } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  consultationNote: string;
  treatmentPlan: string;
  symptoms: string;
  visionTestResult: string;
  ocularPressure: number;
  contactLensBaseCurve: number;
  contactLensDiameter: number;
  prescription: {
    prescriptionNote: string;
    medicines: string[];
  };
};

type Props = {
  refetchReport(): void;
};

const Optometry: FC<Props> = ({ refetchReport }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const { id: appointmentId } = useParams<{ id: string }>();

  const { mutateAsync: submitReport, isPending } = useMutation({
    mutationFn: submitOptometryReport,
    onSuccess: () => {
      refetchReport();
    },
  });

  const onSubmit = async (input: Inputs) => {
    await submitReport({ report: input, appointmentId });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-6">
      <section>
        <h1 className="font-bold">General Report</h1>
        <hr className="border-y-[1.2px] dark:border-white/10" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 mt-3">
          <div className="space-y-1 mb-3">
            <label htmlFor="consultationNote" className="text-[.9rem]">
              Consultation Note <sup className="text-red-500">*</sup>
            </label>
            <input
              type="text"
              placeholder="Enter Consultation Note"
              {...register("consultationNote", { required: true })}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.consultationNote ? "border-red-500/50" : ""
              }`}
            />
          </div>

          <div className="space-y-1 mb-3">
            <label htmlFor="symptoms" className="text-[.9rem]">
              Symptoms Noticed
            </label>
            <input
              type="text"
              placeholder="symptoms"
              {...register("symptoms", {})}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.symptoms ? "border-red-500/50" : ""
              }`}
            />
          </div>

          <div className="space-y-1 mb-3">
            <label htmlFor="treatmentPlan" className="text-[.9rem]">
              Treatment Plan
            </label>
            <input
              type="text"
              placeholder="Treatment Plan"
              {...register("treatmentPlan", {})}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.treatmentPlan ? "border-red-500/50" : ""
              }`}
            />
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h1 className="font-bold">Organ Report</h1>
        <hr className="border-y-[1.2px] dark:border-white/10" />

        <div className="grid grid-cols-2 lg:grid-cols-3 mt-3 gap-x-3">
          <div className="space-y-1 mb-3 col-span-2 lg:col-span-3">
            <label htmlFor="visionTestResult" className="text-[.9rem]">
              Vision Test Result <sup className="text-red-500">*</sup>
            </label>
            <textarea
              placeholder="Enter descriptive vision test result"
              {...register("visionTestResult", { required: true })}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.visionTestResult ? "border-red-500/50" : ""
              } h-[125px] resize-none`}
            />
          </div>

          <div className="space-y-1 mb-3">
            <label htmlFor="ocularPressure" className="text-[.9rem]">
              Ocular Pressure (mmgHg) <sup className="text-red-500">*</sup>
            </label>
            <input
              type="number"
              placeholder="Enter Ocular Pressure"
              defaultValue={0}
              {...register("ocularPressure", { required: true })}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.ocularPressure ? "border-red-500/50" : ""
              }`}
            />
          </div>

          <div className="space-y-1 mb-3">
            <label htmlFor="contactLensBaseCurve" className="text-[.9rem]">
              Contact Lens Base Curve (mm) <sup className="text-red-500">*</sup>
            </label>
            <input
              type="number"
              placeholder="Enter Contact Lens Base Curve"
              {...register("contactLensBaseCurve", { required: true })}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.contactLensBaseCurve ? "border-red-500/50" : ""
              }`}
            />
          </div>

          <div className="space-y-1 mb-3">
            <label htmlFor="contactLensDiameter" className="text-[.9rem]">
              Contact Lens Diameter (mm) <sup className="text-red-500">*</sup>
            </label>
            <input
              type="number"
              placeholder="Enter Contact Lens Diameter"
              {...register("contactLensDiameter", { required: true })}
              className={`w-full bg-transparent p-2 border dark:border-white/10 text-[.9rem] rounded-lg bg-white dark:bg-white/10 ${
                errors.contactLensDiameter ? "border-red-500/50" : ""
              }`}
            />
          </div>
        </div>
      </section>

      <Button type="submit" text="Submit Report" variant="filled" className="ml-auto" loading={isPending} />
    </form>
  );
};

export default Optometry;
