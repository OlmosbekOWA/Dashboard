import { Route } from "react-router-dom";
import Users from "../pages/Users";
import { routes } from ".";
import App from "../App";
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const AppRoutes = () =>{

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<App />}>
                <Route element={< Users/>}>
                    {
                        routes.map(({path, element}, index)=>(
                            <Route key={index} path={path} element={element} />
                        )) 
                    }
                </Route>
            </Route>

        )
    )
    return <RouterProvider router={router} />
    
}


export default AppRoutes

