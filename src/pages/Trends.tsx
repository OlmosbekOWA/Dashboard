import GitHubProjects from "../components/shared/GitHubProjects";
import ContributionGraph from "../components/shared/ContributionGraph";
import ActivityOverview from "../components/ui/activity-overview";
import ContributionActivity from "../components/shared/contribution-activity";
const Trends = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div>
        <h5 className="text-normal text-base mb-2">Popular repositories</h5>
        <GitHubProjects />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h5 className="text-sm font-medium">238 contributions in 2025</h5>
          <button className="p-1 w-[100px] rounded bg-blue-600 text-white text-sm">
            2025
          </button>
        </div>
        <div className="flex">
            <div className="flex text-[10px] flex-col  gap-4 py-9 pl-0 ms:pl-4">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>
            <ContributionGraph />   
        </div>

        <ActivityOverview />
        <ContributionActivity />
        
      </div>
    </div>
  );
};

export default Trends;
