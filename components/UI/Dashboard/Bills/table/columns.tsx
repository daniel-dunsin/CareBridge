import { IPayment } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistanceToNow } from "date-fns";

const columns: ColumnDef<IPayment>[] = [
  {
    accessorKey: "_id",
    header: () => "ID",
  },
  {
    accessorKey: "doctor",
    header: () => "Doctor",
  },
  {
    accessorKey: "amount",
    header: () => "Amount",
  },
  { accessorKey: "paymentMethod", header: () => "Payment Method" },
  { accessorKey: "paymentStatus", header: () => "Status" },
  {
    accessorKey: "transactionDate",
    header: () => "Transaction Date",
    cell: ({ row }) => formatDistanceToNow(row.original.transactionDate),
  },
];

export default columns;
