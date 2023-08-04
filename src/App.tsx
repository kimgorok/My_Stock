import { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "./Router";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atom";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    
    font-weight:bold;
  }
  
`;

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
