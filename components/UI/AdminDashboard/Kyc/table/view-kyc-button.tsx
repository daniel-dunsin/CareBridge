import Button from "@/components/Common/Button";
import { useModal } from "@/lib/providers/modal-provider";
import KycModal from "../modal/kyc-modal";

import { FC } from "react";
import { KycGet } from "@/lib/types";

type Props = KycGet;

const ViewKycButton: FC<Props> = (kyc) => {
  const { showModal } = useModal();

  return (
    <Button
      variant="filled"
      onClick={() => showModal(<KycModal {...kyc} />)}
      className="group-hover:opacity-100 opacity-0"
    >
      View
    </Button>
  );
};

export default ViewKycButton;
