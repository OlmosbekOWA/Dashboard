import usurImg from "../../../public/photo_2025-07-11_15-10-17.jpg";
import { AiOutlineTeam } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding } from "react-icons/fa";
import Link from "antd/es/typography/Link";
import orgLogo from "../../../public/photo_2025-07-23_17-38-41.jpg";
import type { UserHover } from "../../types/UserType";



const UsersInfo = ({ showCard, setShowCard }: UserHover) => {

  function hendleOpenGit(){
    window.open("https://github.com/OlmosbekOWA")
  }

  return (
    <div className="flex flex-col w-full max-w-[700px] md:max-w-[300px]">
      
      <div className="flex items-center gap-3 md:flex-col md:items-center">
        <div
          className="bg-center w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full bg-cover"
          style={{ backgroundImage: `url(${usurImg})` }}
        ></div>
        <h1 className="text-lg md:text-xl text-[#00000062] md:mt-3">
          OlmosbekOWA
        </h1>
      </div>

      
      <button onClick={()=>hendleOpenGit()}  className="w-full bg-[#0000000e] p-1 mt-3 rounded-[5px] text-[14px] font-[500] border-[1px] border-[#00000041] cursor-pointer hover:bg-[#00000021]">
        Follow
      </button>

      {/* Followers / Following */}
      <div className="flex gap-1 items-center mt-2">
        <AiOutlineTeam />
        <Link>1 follower</Link>
        <Link>: 1 following</Link>
      </div>

      {/* Additional info */}
      <div className="flex gap-1 items-center hidden md:flex">
        <FaRegBuilding />
        <p>OWA ACADEMY</p>
      </div>
      <div className="flex gap-1 items-center hidden md:flex">
        <IoLocationOutline />
        <p>QARSHI</p>
      </div>
      <div className="flex gap-1 items-center hidden md:flex">
        <CgMail />
        <a>uzbmojor2810@gmail.com</a>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#0000002d] my-3"></div>

      {/* Achievements */}
      <p className="text-sm text-gray-500">Achievements</p>
      <div className="flex items-center space-x-2 mt-2">
        <img
          src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
          alt="pull-shark"
          className="w-15 h-15"
        />
        <img
          src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png"
          alt="yolo"
          className="w-15 h-15"
        />
      </div>

      {/* Block/Report */}
      <p className="font-semibold text-[14px] text-[#0000008e] mt-3">
        Block or Report
      </p>

      {/* Divider */}
      <div className="w-full h-[1px] bg-[#0000002d] my-3"></div>

      {/* Organizations */}
      <h3>Organizations</h3>
      <a href="https://github.com/owauz" className="relative inline-block mt-2">
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
              <img src={orgLogo} alt="OWA" className="w-10 h-10 rounded" />
              <div>
                <h3 className="font-semibold">
                  Open Web Academy{" "}
                  <span className="text-gray-500 text-sm">owauz</span>
                </h3>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">
              Open Web Academy is a modern IT education center based in
              Uzbekistan. We provide hands-on learning in web development,
              programming, and tech innovation for youth.
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
      </a>
    </div>
  );
};

export default UsersInfo;
