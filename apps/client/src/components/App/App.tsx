import { BrowserRouter } from "react-router-dom";
import GameContextProvider from "../../context/GameContextProvider";
import SocketInit from "../../socketHandlers/SocketInit";
import CenterPageLayout from "../CenterPageLayout";
import AppRoutes from "../AppRoutes/AppRoutes";
import AppSnackbar from "../AppSnackbar/AppSnackbar";

const App = () => {
  return (
    <CenterPageLayout>
      <BrowserRouter>
        <GameContextProvider>
          <SocketInit />
          <AppRoutes />
          <AppSnackbar />
        </GameContextProvider>
      </BrowserRouter>
    </CenterPageLayout>
  );
};

export default App;
