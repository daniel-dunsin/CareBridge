"use client";

import Button from "@/components/Common/Button";
import Loader from "@/components/Common/Loaders";
import { resetPassword } from "@/lib/services/auth.service";
import { toastError } from "@/lib/utils/toast";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  password: string;
};

const Page = () => {
  const token = useSearchParams().get("t");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const router = useRouter();

  const { isPending: loading, mutate } = useMutation({ mutationFn: resetPassword });

  const submit: SubmitHandler<Inputs> = ({ password }) =>
    mutate({ token: `${token}`, password }, { onSuccess: () => (reset(), router.push("/account/login")) });

  useEffect(() => {
    if (token) return;

    toastError("Token not found");
    router.replace("/account/login");
  }, [token]);

  return (
    <div className="container min-h-screen flex items-center sm:justify-center md:py-20 py-14">
      <div className="max-w-[40rem] sm:min-w-[30rem] bg-white dark:bg-darkGray dark:border-white/5 min-w-full border relative p-5 rounded">
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full grid place-content-center backdrop-blur-sm">
            <Loader />
          </div>
        )}

        <div className="space-y-7">
          <div className="space-y-1">
            <h1 className={`font-extrabold text-3xl`}>Reset Password</h1>
          </div>

          <form onSubmit={handleSubmit(submit)} noValidate>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-semibold uppercase">New Password</label>
                <div>
                  <input
                    type="password"
                    className={`w-full p-3 bg-transparent border ${
                      !errors.password ? "focus:border-primary/80" : "border-red-500"
                    } duration-200`}
                    placeholder="***************"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Previous password is required",
                      },
                    })}
                  />
                  {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                </div>
              </div>

              <Button fullWidth variant="filled" className="rounded-none" loading={loading}>
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
