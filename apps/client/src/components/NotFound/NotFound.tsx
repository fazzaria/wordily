import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Grid container justifyContent="center" justifyItems="center" spacing={1}>
      <Grid item xs={12}>
        <Typography align="center">Page Not Found</Typography>
      </Grid>
      <Grid item>
        <Link component={RouterLink} to="/">
          Back to Home
        </Link>
      </Grid>
    </Grid>
  );
};

export default NotFound;
