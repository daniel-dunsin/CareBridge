'use client';
import Modal from '@/components/Common/Modal';
import { useModal } from '@/lib/providers/modal-provider';
import React, { FC, useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

type Props = {
  symptom: string;
};

const SymptomsModal: FC<Props> = ({ symptom }) => {
  const { hideModal } = useModal();

  const formatText = (text: string) => {
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    text = text.replace(/\n/g, '<br>');

    text = text.replace(/\*\s(.*?)<br>/g, '<li>$1</li>');

    return text;
  };

  return (
    <Modal
      onClose={hideModal}
      className="bg-white dark:bg-dark shadow-2xl p-4 rounded-xl xl:w-[40rem] min-h-[20rem] max-h-[28rem] overflow-y-auto lg:min-w-[30rem] space-y-4 relative"
    >
      <h1 className="text-center font-semibold text-[1.5rem]">Result</h1>

      <div>
        <FaQuoteLeft size={30} className="text-primary" />
        <p
          dangerouslySetInnerHTML={{ __html: `<p>${formatText(symptom)}</p>` }}
        ></p>
        <FaQuoteRight size={30} className="ml-auto text-primary" />
      </div>
    </Modal>
  );
};

export default SymptomsModal;
