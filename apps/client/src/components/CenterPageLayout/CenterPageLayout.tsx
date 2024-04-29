import { Box, Grid } from "@mui/material";
import { FC, PropsWithChildren } from "react";
//import a from "../../sharedTypes/index.ts";

const CenterPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box p={2}>
      <Grid
        container
        sx={{ height: window.innerHeight / 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
};

export default CenterPageLayout;
