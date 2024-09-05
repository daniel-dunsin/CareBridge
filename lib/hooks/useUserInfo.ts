import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { getUser } from "../services/user.service";

const useUserInfo = () => {
  const { data: session } = useSession();

  const { data: user, isPending: loading } = useQuery({
    queryFn: () => getUser(),
    queryKey: ["user", "info"],
    enabled: session?.user ? true : false,
    staleTime: 1000 * 60 * 3600,
  });

  return { user, loading };
};

export default useUserInfo;
