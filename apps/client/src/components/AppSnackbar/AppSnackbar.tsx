import { useContext } from "react";
import GameContext from "../../context/GameContext";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AppSnackbar = () => {
  const { setSnackBar, snackBarMessage, snackBarSeverity } =
    useContext(GameContext);

  const handleClose = () => {
    setSnackBar("", snackBarSeverity);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
      autoHideDuration={6000}
      onClose={handleClose}
      open={!!snackBarMessage}
    >
      <Alert
        action={action}
        icon={false}
        severity={snackBarSeverity}
        sx={{ width: "100%" }}
      >
        {snackBarMessage}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
