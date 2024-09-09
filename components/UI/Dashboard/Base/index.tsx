"use client";
import { cards } from "@/lib/data/dashboard";
import OverviewCardComponent from "./card";
import BarChart from "./Charts/bar-chart";
import Appointments from "./Sections/appointments";
import useUserInfo from "@/lib/hooks/useUserInfo";

const Dashboard = () => {
  const {} = useUserInfo();

  return (
    <div className="space-y-4 mt-4">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-2 rounded-lg bg-[#404040] bold-border"></div>
        {cards.map((card, id) => (
          <OverviewCardComponent key={id} {...card} />
        ))}
      </div>

      <div className="md:grid-cols-3 grid gap-5">
        <div className="md:col-span-2 bold-border space-y-8 rounded-lg bg-white dark:bg-darkGray px-3 pt-5 pb-3 self-start">
          <div className="px-5">
            <p className="text-xl font-bold text-gray-600 dark:text-gray-200">Consultations</p>
            <p className="text-xs opacity-50">Overview of all completed consultations had with patients</p>
          </div>
          <BarChart />
        </div>
        <div className="bold-border min-h-[20rem] rounded-lg bg-white dark:bg-darkGray self-start">
          <Appointments />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
