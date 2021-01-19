import * as React from "react";
import { makeStyles, ThemeProvider, CssBaseline } from "@material-ui/core";
import { RecoilRoot, useRecoilValue } from "recoil";
import { ThemeState } from "data/states/ThemeStore";
import LightTheme from "themes/LightTheme";
import DarkTheme from "themes/DarkTheme";
import BlurContainer from "./layouts/BlurContainer";

export interface IGlobalWrapperProps {
  children?: React.ReactNode;
}

const useGlobalStyle = makeStyles((theme) => ({
  "@global": {
    html: {
      backgroundColor: theme.palette.background.default,
      background: "url(/images/background.jpg) no-repeat center center fixed",
      backgroundSize: "cover",
    },
    body: {},
  },
}));

function GlobalStyles() {
  useGlobalStyle();
  return <></>;
}

function ThemeWrapper({ children }: IGlobalWrapperProps) {
  const activeTheme = useRecoilValue(ThemeState);

  return (
    <ThemeProvider theme={activeTheme === "light" ? LightTheme : DarkTheme}>
      <CssBaseline />
      <GlobalStyles />
      <BlurContainer>{children}</BlurContainer>
    </ThemeProvider>
  );
}

export default function GlobalWrapper({ children }: IGlobalWrapperProps) {
  return (
    <RecoilRoot>
      <ThemeWrapper>{children}</ThemeWrapper>
    </RecoilRoot>
  );
}
