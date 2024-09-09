import Button from "@/components/Common/Button";
import { changePassword } from "@/lib/services/user.service";
import { ChangePassword } from "@/lib/types";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

const PasswordChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePassword>();

  const { mutate, isPending: loading } = useMutation({ mutationFn: changePassword });

  const submit: SubmitHandler<ChangePassword> = async (data) => mutate(data);

  return (
    <div className="border dark:border-white/10 rounded-xl p-4 space-y-4">
      <p className="font-semibold">Change password</p>

      <form onSubmit={handleSubmit(submit)} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="oldPassword" className="font-semibold">
            Old Password
          </label>
          <input
            type="password"
            className="w-full bg-transparent p-2 border dark:border-white/10 rounded-lg bg-white dark:bg-white/10 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:select-none"
            placeholder="*******"
            {...register("oldPassword", { required: true })}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="newPassword" className="font-semibold">
            New Password
          </label>
          <input
            type="password"
            className="w-full bg-transparent p-2 border dark:border-white/10 rounded-lg bg-white dark:bg-white/10 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:select-none"
            placeholder="*******"
            {...register("newPassword", { required: true })}
          />
        </div>

        <Button variant="filled" fullWidth loading={loading}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default PasswordChange;
