"use client";

import Button from "@/components/Common/Button";
import Loader from "@/components/Common/Loaders";
import { forgotPassword } from "@/lib/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const ForgotPasswordModal = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<{ email: string }>();

  const { isPending: loading, mutate } = useMutation({ mutationFn: forgotPassword });

  const router = useRouter();

  const submit: SubmitHandler<{ email: string }> = ({ email }) => {
    mutate(email, {
      onSuccess: () => router.replace("/account/login"),
    });
  };

  return (
    <main className="min-h-screen w-full grid place-content-center">
      <div className="sm:min-w-[25rem] min-w-[20rem] relative bg-white dark:bg-darkGray dark:border-white/5 border rounded-xl p-5 mx-auto">
        {loading && <Loader />}

        <form onSubmit={handleSubmit(submit)} noValidate>
          <div className="space-y-5">
            <div className="space-y-1">
              <p className={`font-bold text-primary text-xl`}>Forgot Password</p>
              <p className="opacity-60 text-xs">Enter email to send a reset link</p>
            </div>

            <div className="space-y-1">
              {/* <label className="opacity-80">Email</label> */}
              <input
                type="text"
                className={`w-full p-3 bg-transparent border text-sm disabled:opacity-25 disabled:cursor-not-allowed ${
                  !errors.email ? "border-black/30 rounded focus:border-primary/80" : "border-red-500"
                } duration-200`}
                placeholder="johndoe@example.com"
                {...register("email", { required: true })}
                disabled={loading}
              />
            </div>

            <div className="space-y-1">
              <Button fullWidth variant="filled" loading={loading}>
                Send Reset Link
              </Button>

              <p className="text-center text-sm">
                {/* <span className="opacity-50">Or </span>{" "} */}
                <Link href="/account/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ForgotPasswordModal;
