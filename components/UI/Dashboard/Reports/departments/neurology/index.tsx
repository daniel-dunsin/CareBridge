import TableComponent from "@/components/Common/Table";
import columns from "./columns";
import { BrainMetrics, HeartMetrics } from "@/lib/types/reports";
import { getRandomFloat, getRandomNumber } from "@/lib/helpers/numbers";
import { useQuery } from "@tanstack/react-query";
import { DepartmentsEnum } from "@/lib/enums";
import { getReports } from "@/lib/services/report.service";
import Loader from "@/components/Common/Loaders";

const NeurologyReport = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getReports", DepartmentsEnum.NEUROLOGY],
    queryFn: getReports<BrainMetrics>(DepartmentsEnum.NEUROLOGY),
  });

  if (isPending) {
    return (
      <div className="p-10 grid place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <TableComponent columns={columns} data={data || []} />
    </div>
  );
};

export default NeurologyReport;
