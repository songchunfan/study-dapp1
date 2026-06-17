import { Box, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "800px",
        margin: "auto",
        mt: "40px",
        p: "30px",
        border: "1px solid #000",
      }}
    >
      <Box>staked Amount: {}</Box>
      <Box>unstaked Amount: {}</Box>
    </Box>
  );
}