import { createTheme } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: purple[600],
    },
  },
  myButton: {
    backgroundColor: "grey",
    color: "white",
    border: "1px solid red",
  },
});
export default theme;
