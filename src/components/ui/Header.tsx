import { Github } from "lucide-react";
import { Typography, Image } from "antd";
import logo from "../../../public/photo_2025-07-11_15-10-17.jpg";

const { Title } = Typography;

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-4 py-3 shadow-md">
      <div className="max-w-[1216px] mx-auto flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Github size={28} className="text-white" />
          <Title
            level={4}
            className="!text-white !m-0 font-semibold tracking-wide"
          >
            OlmosbekOWA
          </Title>
        </div>

        {/* Right - Profile / Sign In */}
        <div className="flex items-center gap-3">
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded-md text-sm font-medium border border-gray-600 transition">
            Sign In
          </button>

          {/* User Avatar */}
          <Image
            src={logo}
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full border border-gray-600 object-cover"
            preview={false}
          />
        </div>
      </div>
    </header>
  );
}
