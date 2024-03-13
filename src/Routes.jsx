import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/LandingPage/index";
import LandingPage from "pages/LandingPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    
    {
      path: "landingpage",
      element: <LandingPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
