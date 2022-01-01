import * as React from "react";
import {
  createTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import CssBaseLine from '@material-ui/core/CssBaseline';
import HeroSection from "../components/HeroSection";

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
})

const IndexPage = () => {
  
  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine/>
      <HeroSection/>
    </ThemeProvider>
  )
}

export default IndexPage
