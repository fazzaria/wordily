import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Link component={RouterLink} to="/">
        Back to Home
      </Link>
      <p>Page Not Found</p>
    </>
  );
};

export default NotFound;
