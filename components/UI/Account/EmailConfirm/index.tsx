"use client";
import Button from "@/components/Common/Button";
import { useOnboardStore } from "@/lib/store/global.store";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EmailConfirm = () => {
  const { hasRegistered } = useOnboardStore();

  const router = useRouter();

  if (!hasRegistered) {
    router.replace("/account/register");
    return null;
  }

  return (
    <main className="min-w-full min-h-screen grid place-content-center">
      <div className="space-y-4 text-center">
        <Image
          src={"/svgs/account/email-sent.svg"}
          alt="confirm email illustration"
          width={300}
          height={300}
          className="mx-auto"
        />

        <p className="text-center text-gray-500 text-sm">A verification link has been sent to you email.</p>

        <div className="grid place-content-center">
          <div>
            <Button onClick={() => router.replace("/")}>Go Home</Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmailConfirm;
