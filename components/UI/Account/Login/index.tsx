"use client";

import Button from "@/components/Common/Button";
import { ILoginData } from "@/lib/types";
import { toastError, toastSuccess } from "@/lib/utils/toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginData>();

  const [loading, setLoading] = useState(false);

  const fromCart = useSearchParams().get("fromCart");

  const submit: SubmitHandler<ILoginData> = async (data) => {
    try {
      setLoading(true);
      const res = await signIn("credentials", { email: data.emailOrPhone, password: data.password, redirect: false });
      if (res?.ok) {
        toastSuccess("Login successful.");

        if (!fromCart) {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/cart";
        }
      } else {
        toastError("Login failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center">
      <div className="container items-center grid place-content-center space-y-4">
        <div className="space-y-6 p-5 min-w-96 max-w-xl bg-white dark:bg-darkGray rounded-xl border dark:border-white/5 mx-auto">
          <div className="flex items-center gap-2 text-3xl">
            {/* <GiMedicines /> */}
            <span className="font-bold">Login</span>
          </div>

          <form onSubmit={handleSubmit(submit)} className="mx-auto">
            <div className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="emailOrPhone">Email or Phone</label>
                <input
                  type="text"
                  {...register("emailOrPhone", { required: true })}
                  className={`w-full bg-transparent p-2 border dark:border-white/10 rounded-lg bg-white dark:bg-white/10 ${
                    errors.emailOrPhone ? "border-red-500/50" : ""
                  }`}
                  placeholder="Phone or email"
                />
              </div>

              <div className="space-y-1 col-span-2">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className={`w-full bg-transparent p-2 border dark:border-white/10 rounded-lg bg-white dark:bg-white/10 ${
                    errors.password ? "border-red-500/50" : ""
                  }`}
                  placeholder="***************"
                />
              </div>

              <Button fullWidth disabled={loading} loading={loading} className="rounded-lg">
                Login
              </Button>

              <div className="text-sm text-center text-gray-500">
                <p>
                  Don&apos;t have an account?{" "}
                  <Link href={"/account/register"} className="border-b dark:text-primary border-blue-300/50">
                    Register
                  </Link>
                </p>
                <p>
                  Forgot password? Click{" "}
                  <Link href={"/account/forgot-password"} className="border-b dark:text-primary border-blue-300/50">
                    Here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
