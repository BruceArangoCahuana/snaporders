import { Grid, Paper, Typography } from "@mui/material";

export default function Welcome() {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ mt:3 }}
    >
      <Paper
        sx={{
          padding: 4,
          width: "100%",
          maxWidth:1650
        }}
      >
      <Typography variant="h6" sx={{textAlign:"left"}}>Overview</Typography>
        <Typography variant="h4" sx={{textAlign:"left"}}>Dashboard</Typography>
      </Paper>
    </Grid>
  );
}
