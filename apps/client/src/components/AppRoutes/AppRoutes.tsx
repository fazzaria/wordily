import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import GamePage from "../GamePage";
import NotFound from "../NotFound";
import homePath from "./paths/homePath";
import { roomPath } from "./paths/roomPath";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={homePath} element={<HomePage />} />
      <Route path={`${roomPath}/:roomId`} element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
