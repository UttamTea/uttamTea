// lib/theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  palette: {
    primary: {
      main: "#9855FF", // matching rgba(140, 69, 255)
      contrastText: "#fff",
    },
    secondary: {
      main: "#1976d2",
    },
    danger: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
    customBlue: {
      main: "#1e88e5",
      contrastText: "#fff",
    },
    customGray: {
      main: "rgba(255, 255, 255, 0.70)",
    },
  },
  typography: {
    h1: {
      fontSize: "5rem",
      fontWeight: 700,
      [`@media (max-width:900px)`]: {
        fontSize: "2rem",
      },
    }, // 80px
    h2: {
      fontSize: "3.5rem",
      fontWeight: 500,
      [`@media (max-width:900px)`]: {
        fontSize: "1.5rem",
      },
    }, // 56px
    h3: {
      fontSize: "2.5rem",
      fontWeight: 500,
      [`@media (max-width:900px)`]: {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      [`@media (max-width:900px)`]: {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 400,
      [`@media (max-width:900px)`]: {
        fontSize: "1rem",
      },
    },
    subtitle1: {
      fontSize: "1.5rem",
    },
    subtitle2: {
      fontSize: "1.125rem",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    body2: { fontSize: "0.875rem" }, // 14px
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "rgba(140, 69, 255, 0.40)",
            color: "#fff",
            fontWeight: 400,
            borderRadius: "0.5rem",
            boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
            textTransform: "none",
            "&:hover": { backgroundColor: "rgba(140, 69, 255, 0.50)" },
          },
        },
        {
          props: { variant: "lightBrown" },
          style: {
            backgroundColor: "#A64D3B",
            color: "#fff",
            fontWeight: 400,
            fontSize: "1.125rem",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            textTransform: "none",
            fontFamily: "Manrope",
            // "&:hover": {
            //   backgroundColor: "rgba(140, 69, 255, 0.70)",
            // },
          },
        },
        {
          props: { variant: "transparent" },
          style: {
            backgroundColor: "transparent",
            color: "#fff",
            fontWeight: 400,
            fontSize: "1.125rem",
            borderRadius: "0.5rem",
            padding: "0.5rem 1rem",
            textTransform: "none",
            fontFamily: "Manrope",
            // "&:hover": {
            //   backgroundColor: "rgba(140, 69, 255, 0.70)",
            // },
          },
        },
        {
          props: { variant: "whiteFilled" },
          style: {
            backgroundColor: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#802EFF",
            fontWeight: 500,
            fontSize: "1rem",
            borderRadius: "0.625rem",
            boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.52) inset",
            backdropFilter: "blur(7px)",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#fff",
            },
          },
        },
        {
          props: { variant: "black" },
          style: {
            backgroundColor: "#121212",
            borderRadius: "100px",
            width: "fit-content",
            padding: "0.75rem 2.25rem",
            fontSize: "1rem",
            fontWeight: "400",
            lineHeight: "normal",
            fontFamily: "Manrope",
            color: "#fff",
            textTransform: "none",
            border: "1px solid #121212",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#121212",
              border: "1px solid #121212",
            },
          },
        },
        {
          props: { variant: "contained", color: "customBlue" },
          style: {
            backgroundColor: "#1e88e5",
            color: "#fff",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          },
        },
      ],
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
