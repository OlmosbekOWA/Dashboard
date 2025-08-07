import { Computer } from 'lucide-react'

export default function ActivityOverview() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 border rounded-lg bg-white shadow-sm"> {/* Added border, rounded-lg, bg-white for card-like appearance */}
      <div className="p-0">
        <div className="flex items-center gap-2 mb-6">
          {/* logist-project avatar/tag */}
          <div className="flex items-center gap-1 px-2 py-1 border rounded-md bg-green-50 text-green-700"> {/* Styled to look like the tag */}
            <img src="https://avatars.githubusercontent.com/u/223993180?s=200&v=4" alt="logist-project avatar" className="h-6 w-6 rounded-md" /> {/* Adjusted size and rounded corners */}
            <span className="text-sm font-medium">@logist-project</span>
          </div>

          <div className="flex items-center gap-1 px-2 py-1 border rounded-md bg-gray-900 text-white"> {/* Styled to look like the tag */}
            <img src="https://avatars.githubusercontent.com/u/100306666?s=64&v=4" alt="owauz avatar" className="h-6 w-6 rounded-md" /> {/* Adjusted size and rounded corners */}
            <span className="text-sm font-medium">@owauz</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Activity overview</h3>
            <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
              <Computer className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>
                Contributed to{" "}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                  alienorar/Billing-service-main
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                  OlmosbekOWA/Billing-kontrakt-p...
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                  logist-project/logist-x-project
                </a>{" "}
                and 19 other repositories
              </p>
            </div>
          </div>

          
          <div className="flex items-center justify-center">
            <svg width="200" height="200" viewBox="0 0 200 200" className="overflow-visible">
              
              <line x1="0" y1="100" x2="200" y2="100" stroke="#4CAF50" strokeWidth="1" /> 
              <line x1="100" y1="0" x2="100" y2="200" stroke="#4CAF50" strokeWidth="1" /> 

              
              <polygon points="100,100 11,100 100,111" fill="#4CAF50" fillOpacity="0.2" />

              <circle cx="100" cy="100" r="3" fill="#4CAF50" stroke="#4CAF50" strokeWidth="1" /> 
              <circle cx="11" cy="100" r="3" fill="#4CAF50" stroke="#4CAF50" strokeWidth="1" /> 

              <text x="100" y="10" textAnchor="middle" fontSize="12" fill="#333">
                Code review
              </text>
              <text x="190" y="100" textAnchor="end" dominantBaseline="middle" fontSize="12" fill="#333">
                Issues
              </text>
              <text x="10" y="100" textAnchor="start" dominantBaseline="middle" fontSize="12" fill="#333">
                89%
              </text>
              <text x="10" y="115" textAnchor="start" dominantBaseline="middle" fontSize="12" fill="#333">
                Commits
              </text>
              <text x="100" y="190" textAnchor="middle" fontSize="12" fill="#333">
                11%
              </text>
              <text x="100" y="175" textAnchor="middle" fontSize="12" fill="#333">
                Pull requests
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
