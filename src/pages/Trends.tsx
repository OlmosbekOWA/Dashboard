import GitHubProjects from "../components/shared/GitHubProjects"
import ContributionGraph from "../components/shared/ContributionGraph"
const Trends = () =>{
    return(
        <div className="w-full">
            <div className="w-full flex justify-between">
                <h5 className="f4 mb-2 text-normal">Popular repositories</h5>
            </div>
            <GitHubProjects />
            <div className="w-full mt-5">
                <div className="w-full flex justify-between">
                    <h5>238 contributions in 2025</h5>
                    <button className="p-1 w-[130px] rounded-[4px] bg-blue-600 text-white cursor-pointer">2025</button>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>
                    </div>
                </div>
            </div>
            <ContributionGraph />
        

        </div>
    )
}

export default Trends