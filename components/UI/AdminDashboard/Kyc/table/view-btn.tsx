import Button from "@/components/Common/Button";
import ImageModal from "@/components/Common/Modal/image-modal";
import { useModal } from "@/lib/providers/modal-provider";
import { FC } from "react";

type Props = { image: string };

const ViewButton: FC<Props> = ({ image }) => {
  const { showModal } = useModal();

  return (
    <Button variant="filled" size="extra-small" onClick={() => showModal(<ImageModal image={image} />)}>
      View
    </Button>
  );
};

export default ViewButton;
