import TableComponent from "@/components/Common/Table";
import columns from "./columns";
import { HeartMetrics, KidneyMetrics } from "@/lib/types/reports";
import { useQuery } from "@tanstack/react-query";
import { DepartmentsEnum } from "@/lib/enums";
import { getReports } from "@/lib/services/report.service";
import Loader from "@/components/Common/Loaders";

const NephrologyReport = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getReports", DepartmentsEnum.NEPHROLOGY],
    queryFn: getReports<KidneyMetrics>(DepartmentsEnum.NEPHROLOGY),
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

export default NephrologyReport;
