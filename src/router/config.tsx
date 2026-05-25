import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ScubaPage from "../pages/scuba/page";
import EfoilPage from "../pages/efoil/page";
import GalleryPage from "../pages/gallery/page";
import BookPage from "../pages/book/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scuba",
    element: <ScubaPage />,
  },
  {
    path: "/efoil",
    element: <EfoilPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
  {
    path: "/book",
    element: <BookPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;