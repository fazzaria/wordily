import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import BackHandIcon from "@mui/icons-material/BackHand";
import { Player } from "../../../sharedTypes";

const PlayerIcon = ({ player }: { player: Player }) => {
  if (player.ready) {
    return <CheckCircleOutlineIcon />;
  }
  if (player.turnActive) {
    return <EditIcon />;
  }
  if (player.votingToEnd) {
    return <BackHandIcon />;
  }
  return <PersonIcon />;
};

export default PlayerIcon;
