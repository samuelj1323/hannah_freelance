// App.js
import React from "react";
import { ThemeProvider, CssBaseline, Stack } from "@mui/material";
import theme from "./theme/theme"; // Import the custom theme
import Header from "./components/Header/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures consistent baseline styles */}
      <Stack
        style={{
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <Header />
        {/* Your other components and content */}
      </Stack>
    </ThemeProvider>
  );
}

export default App;
