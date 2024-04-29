import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { Player } from "../../../sharedTypes";

const PlayerIcon = ({ player }: { player: Player }) => {
  if (player.ready) {
    return <CheckCircleOutlineIcon />;
  }
  if (player.turnActive) {
    return <EditIcon />;
  }
  return <PersonIcon />;
};

export default PlayerIcon;
