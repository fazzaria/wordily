import { Grid } from "@mui/material";
import Story from "./components/Story";
import PlayerList from "./components/PlayerList";
import ExitButton from "./components/ExitButton";
import Controls from "./components/Controls";
import Instructions from "./components/Instructions";
import InviteCode from "./components/InviteCode";

const GamePage = () => {
  return (
    <Grid
      container
      item
      md={6}
      xs={12}
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <ExitButton />
      <Grid item xs={12}>
        <Story />
      </Grid>
      <Grid item xs={12}>
        <Controls />
      </Grid>
      <Grid item xs={12}>
        <PlayerList />
      </Grid>
      <Grid item xs={12}>
        <Instructions />
      </Grid>
      <Grid item xs={12}>
        <InviteCode />
      </Grid>
    </Grid>
  );
};

export default GamePage;
