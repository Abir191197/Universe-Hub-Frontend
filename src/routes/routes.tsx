import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/Landing page/LandingPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage></LandingPage> ,
  },
]);

export default router;
