import Button from "@/components/Common/Button";
import { defaultImageUrl, departments } from "@/lib/data/dashboard";
import { DepartmentsEnum } from "@/lib/enums";
import { HeartMetrics } from "@/lib/types/reports";
import { faker } from "@faker-js/faker";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";

const columns: ColumnDef<HeartMetrics>[] = [
  {
    accessorKey: "doctor",
    header: () => "Doctor",
    cell: ({ row }) => {
      const doctor = row.original.consultation?.appointment?.doctor;

      return (
        <div className="flex items-center gap-2 min-w-[15rem]">
          <div className="size-10 rounded-full border relative overflow-hidden">
            <Image
              src={doctor ? doctor.user.profilePicture : ""}
              alt="profile-pic"
              width={100}
              height={100}
              className="w-full h-full absolute top-0 left-0"
            />
          </div>

          <div className="text-sm">
            <p className="font-bold">
              {doctor?.user.firstName} {doctor?.user.lastName}
            </p>
            <p className="text-xs text-gray-400">{doctor?.department}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "heartRate",
    header: () => "Heart Rate (bpm)",
  },
  {
    accessorKey: "bloodGlucoseLevel",
    header: () => "Glucose Level (mg/dL)",
  },
  {
    accessorKey: "bloodOxygenLevel",
    header: () => "Blood Oxygen Level (%)",
  },
  {
    accessorKey: "bloodPressureDiastolic",
    header: () => "Blood Pressure (mmHg)",
  },
  {
    accessorKey: "actions",
    header: () => "Action",
    cell: ({ row }) => {
      return (
        <Link href={`/reports/${row.original._id}?department=${DepartmentsEnum.CARDIOLOGY}`}>
          <Button size="extra-small">View Report</Button>
        </Link>
      );
    },
  },
];

export default columns;
