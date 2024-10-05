'use client';
import Button from '@/components/Common/Button';
import { useModal } from '@/lib/providers/modal-provider';
import { checkSymptoms } from '@/lib/services/patient.service';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BiHealth } from 'react-icons/bi';
import SymptomsModal from './modal/symptoms-modal';

type Input = {
  symptom: string;
};

const SymptomChecker = () => {
  const { showModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const { mutateAsync: _checkSymptoms, isPending: _checkingSymptoms } =
    useMutation({
      mutationKey: ['useCheckSymptoms'],
      mutationFn: (symptoms: string) => checkSymptoms(symptoms),
      onSuccess(data) {
        showModal(<SymptomsModal symptom={data?.text!} />);
      },
    });

  const submit = async (e: Input) => {
    _checkSymptoms(e.symptom);
  };

  return (
    <div className="space-y-4 mt-4">
      <header>
        <div className="flex items-center space-x-1">
          <h1 className="font-bold text-[1.2rem]">Symptom Checker</h1>
          <span>
            <BiHealth className="text-primary" size={18} />
          </span>
        </div>
        <p className="text-[.9rem] mt-2 mb-5">
          Quick Tele-First-Aid: Input your symptoms for instant health insights,
          potential causes, and advice on next steps—all from the comfort of
          your phone!
        </p>
      </header>

      <form onSubmit={handleSubmit(submit)} className="space-y-2">
        <div>
          <textarea
            className={`w-full p-3 bg-transparent border rounded-md h-[200px]  ${
              !errors?.symptom ? 'focus:border-primary/80' : 'border-red-500'
            } duration-200`}
            placeholder="Enter a well detailed symptom"
            {...register('symptom', {
              required: {
                value: true,
                message: 'Symptom is required',
              },
            })}
          />
          {errors?.symptom && (
            <p className="text-sm text-red-500">{errors?.symptom?.message}</p>
          )}
        </div>

        <Button loading={_checkingSymptoms}>Check Symptoms</Button>
      </form>
    </div>
  );
};

export default SymptomChecker;
