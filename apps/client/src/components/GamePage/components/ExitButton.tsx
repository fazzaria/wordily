import { Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useRequest from "../../../utils/useRequest";
import leaveRoom from "../../../socketEmitters/leaveRoom";

const ExitButton = () => {
  const request = useRequest();
  const handleLeave = () => {
    request(() => leaveRoom());
  };

  return (
    <Fab
      onClick={handleLeave}
      size="small"
      sx={{ position: "absolute", top: 10, right: 10 }}
    >
      <CloseIcon />
    </Fab>
  );
};

export default ExitButton;
