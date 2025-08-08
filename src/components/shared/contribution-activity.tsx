import { Card } from "antd"
import { Button } from "antd"
import { ExternalLink, Lock, Ellipsis } from 'lucide-react'

export default function ContributionActivity() {
  const totalCommits = 3 

  return (
    <Card className="w-full  mx-auto">
      <div>
        <h3 className="text-lg font-semibold">Contribution activity</h3>
      </div>
      <div className="space-y-6">

        <div className="relative flex items-center pb-4">
          <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">August 2025</span>
          <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
        </div>


        <div className="relative pl-4">

          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />


          <div className="relative mb-6">

            <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700">
              <ExternalLink className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="ml-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Created {totalCommits} commits in 2 repositories</p>
                <Ellipsis className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                    logist-project/logist-x-project 
                  </a>
                  <span className="text-gray-500 dark:text-gray-400">25 commits</span>
                  <div className="h-2 bg-green-500 rounded-full ml-2" style={{ width: `${(2 / totalCommits) * 100}%`, maxWidth: '80px' }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                    alienorar/Billing-service-main,
                  </a>
                  <span className="text-gray-500 dark:text-gray-400">18 commits</span>
                  <div className="h-2 bg-green-500 rounded-full ml-2" style={{ width: `${(1 / totalCommits) * 100}%`, maxWidth: '80px' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">

            <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-700">
              <Lock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="ml-4 flex items-center justify-between text-sm">
              <p className="font-medium">39 contributions in private repositories</p>
              <span className="text-gray-500 dark:text-gray-400">Aug 1 - Aug 5</span>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <Button  className="w-full">
            Show more activity
          </Button>
        </div>
      </div>
    </Card>
  )
}
