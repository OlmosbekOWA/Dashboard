import { lazy } from "react";

export const Trends = lazy(() => import("../pages/Trends"))
export const Repositories = lazy(()=> import("../pages/Repositories"))
export const Projects = lazy(()=> import("../pages/Projects"))
export const Skils = lazy(()=> import("../pages/Skils"))