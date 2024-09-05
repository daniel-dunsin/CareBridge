"use client";
import Button from "@/components/Common/Button";
import { handleAxiosErrorWithToast } from "@/lib/config/axios-error";
import { publicApi } from "@/lib/config/axios-instance";
import { toastError, toastSuccess } from "@/lib/utils/toast";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { RiLoader4Fill } from "react-icons/ri";

const Page = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) return;

    const verify = async () => {
      try {
        const { data } = await publicApi.post("/auth/verify-email", { token, email });
        toastSuccess("Verification successful");
      } catch (err) {
        setError(true);
        handleAxiosErrorWithToast(err);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token]);

  if (!token) {
    toastError("Invalid URL", { id: "invalid" });
    return router.replace("/account/register");
  }

  return (
    <div className="min-h-screen w-full grid place-content-center text-center ">
      {loading ? (
        <div className="min-h-[20rem] grid place-content-center text-center space-y-3">
          <RiLoader4Fill size={50} className="mx-auto animate-spin" />

          <p className="text-sm">Verifying</p>
        </div>
      ) : (
        <>
          {error ? (
            <div className="space-y-10 min-h-[20rem] grid place-content-center capitalize text-center">
              <div className="space-y-3">
                <Image src="/svgs/account/sorry.svg" alt="failed" width={300} height={300} className="mx-auto" />
                <p className="text-sm">Sorry, account verification failed</p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button onClick={() => router.replace("/")}>Go Home</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-10 min-h-[20rem] grid place-content-center capitalize text-center">
              <div className="space-y-3">
                <FaCheckCircle size={50} className="mx-auto text-green-500" />
                <p className="text-sm">account verified successfully</p>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button onClick={() => router.replace("/")}>Go Home</Button>
                <Button variant="filled" icon={<FiLogIn />} onClick={() => router.replace("/account/login")}>
                  Login
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
