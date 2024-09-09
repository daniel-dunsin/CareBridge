import { OverviewCard } from "@/lib/data/dashboard";

const OverviewCardComponent = ({ icon, title, value }: OverviewCard) => {
  return (
    <div className="px-5 py-7 rounded-lg bold-border bg-white dark:bg-darkGray flex gap-4">
      <div className="size-12 grid place-content-center text-primary bg-primary/5 rounded-full">{icon}</div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="dark:text-gray-400/70 text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default OverviewCardComponent;
