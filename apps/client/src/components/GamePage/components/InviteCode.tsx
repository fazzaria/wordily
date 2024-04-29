import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const InviteCode = () => {
  const { roomId } = useParams();

  return (
    <Typography>
      Invite Code: <span style={{ fontWeight: "bold" }}>{roomId}</span>
    </Typography>
  );
};

export default InviteCode;
