import React from "react";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Pomodoro</h1>
      <Button
        variant="contained"
        size="small"
        sx={{ height: "35px", mt: "20px" }}
        startIcon={<SettingsIcon />}
      >
        Settings
      </Button>
    </div>
  );
}

export default Navbar;
