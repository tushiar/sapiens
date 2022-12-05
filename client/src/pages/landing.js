import { Alert } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { connect } from "react-redux";
import MainSection from "../components/MainSection";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import { theme as myTheme } from "../theme";

const Landing = ({ myCustomTheme, themeUpdated }) => {
  const theme = createTheme(myTheme[myCustomTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyHeader />
      {themeUpdated ? (
        <Alert
          sx={{ width: "300px", marginLeft: "30%" }}
          variant="filled"
          severity="success"
        >
          {themeUpdated}
        </Alert>
      ) : null}
      <main>
        {/* Hero unit */}
        <MainSection />
      </main>
      {/* Footer */}
      <MyFooter />
      {/* End footer */}
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => ({
  myCustomTheme: state.auth.theme,
  themeUpdated: state.auth.themeUpdated,
});
export default connect(mapStateToProps, {})(Landing);
