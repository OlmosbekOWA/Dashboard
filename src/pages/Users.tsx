import usurImg from "../../public/photo_2025-07-11_15-10-17.jpg"
import { AiOutlineTeam } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import Link from "antd/es/typography/Link";
import orgLogo from "../../public/photo_2025-07-23_17-38-41.jpg"
import { useState } from "react";

const repos = [
  { name: 'Task', lang: 'JavaScript', color: 'bg-yellow-400' },
  { name: 'TodoList', lang: 'TypeScript', color: 'bg-blue-500' },
  { name: 'reduxTodoList', lang: 'JavaScript', color: 'bg-yellow-400' },
  { name: 'next-dashboard', lang: 'TypeScript', color: 'bg-blue-500' },
  { name: 'Weather', lang: 'SCSS', color: 'bg-pink-500' },
  { name: 'Countres', lang: 'JavaScript', color: 'bg-yellow-400' },
];

export default function Users () {
    const [showCard, setShowCard] = useState(false);
  return (
    <div className="bg-white p-6 max-w-6xl mx-auto rounded-md shadow-md mt-10 flex justify-between">
        <div className="flex gap-6 flex-col w-full max-w-[300px]">
            <div
                className="bg-center max-w-[296px] h-[296px] rounded-full bg-cover"
                style={{ backgroundImage: `url(${usurImg})`, }}
            >
        </div>
        <div className="flex flex-col gap-3">
            <h1 className="text-xl text-[#00000062]">OlmosbekOWA</h1>
            <button  className="w-full bg-[#0000000e] p-1 rounded-[5px] text-[14px] font-[500] border-[1px] border-[#00000041] cursor-pointer hover:bg-[#00000021]">Follow</button>
            <div className="flex gap-1 items-center">
                <AiOutlineTeam />
                <Link>1 folloWer </Link>
                <Link>: 1 following</Link>
            </div>
            <div className="flex gap-1 items-center">
                <FaRegBuilding />
                <p>OWA ACADIMY</p>

            </div>
            <div className="flex gap-1 items-center">
                <IoLocationOutline />
                <p>QARSHI</p>

            </div>
            <div className="flex gap-1 items-center">
                <CgMail />
                <a>uzbmojor2810@gmail.com</a>

            </div>
            <div className="w-full h-[1px] bg-[#0000002d]"></div>

          
            <p className="text-sm text-gray-500">Achievements</p>
            
            <div className="flex items-center space-x-2">
              <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" alt="pull-shark" className="w-15 h-15" />
              <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" alt="yolo" className="w-15 h-15" />
            </div>
            <p className="font-semibold text-[14px] text-[#0000008e]">Blok or Report</p>
            <div className="w-full h-[1px] bg-[#0000002d]"></div>
            <h3>Organizations</h3>
            <div className="relative inline-block">
                
                <img
                    src={orgLogo}
                    alt="OWA"
                    className="w-12 h-12 rounded cursor-pointer"
                    onMouseEnter={() => setShowCard(true)}
                    onMouseLeave={() => setShowCard(false)}
                />

                
                {showCard && (
                    <div
                    onMouseEnter={() => setShowCard(true)}
                    onMouseLeave={() => setShowCard(false)}
                    className="absolute left-14 top-0 z-10 w-80 bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-opacity duration-300"
                    >
                    
                    <div className="flex items-center gap-3 mb-2">
                        <img
                        src={orgLogo}
                        alt="OWA"
                        className="w-10 h-10 rounded"
                        />
                        <div>
                        <h3 className="font-semibold">Open Web Academy <span className="text-gray-500 text-sm">owauz</span></h3>
                        </div>
                    </div>

                    
                    <p className="text-sm text-gray-700 mb-2">
                        Open Web Academy is a modern IT education center based in Uzbekistan. We provide hands-on learning in web development, programming, and tech innovation for youth.
                    </p>

                    
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                        <span>📍</span>
                        <span>Uzbekistan</span>
                    </div>

                    
                    <div className="flex justify-between text-sm text-gray-600 border-t pt-2">
                        <div>📦 9 repositories</div>
                        <div>👥 13 members</div>
                    </div>
                    </div>
                )}
            </div>
          
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4">Popular repositories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="border rounded-md p-4 hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  {repo.name}
                </a>
                <span className="text-xs px-2 py-0.5 bg-gray-100 border rounded text-gray-600">Public</span>
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-600">
                <span className={`w-3 h-3 ${repo.color} rounded-full mr-2`}></span>
                {repo.lang}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


