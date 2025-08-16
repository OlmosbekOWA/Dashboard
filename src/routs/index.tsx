import { Trends, Repositories, Projects, Skils } from "../lazy/index";
import { IoBookOutline } from "react-icons/io5";
import { RiGitRepositoryLine } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { RiUserShared2Fill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";

export const routes = [
  {
    title: "Overview",
    path: "/",
    element: <Trends />,
    icons: <IoBookOutline />,
  },
  {
    title: "Repositories",
    path: "/repositories",
    element: <Repositories />,
    icons: <RiGitRepositoryLine />,
    badge: 16, // badge soni
  },
  {
    title: "Projects",
    path: "/projects",
    element: <Projects />,
    icons: <GoProjectSymlink />,
  },
  {
    title: "Skils",
    path: "/skils",
    element: <Skils />,
    icons: <RiUserShared2Fill />,
  }
];
