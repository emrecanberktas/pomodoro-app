import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import { Container } from "@mui/material/";
function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <Timer />
      </Container>
    </div>
  );
}

export default App;
