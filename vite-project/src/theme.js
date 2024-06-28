import { createTheme } from "@mui/material/styles";

// Funções personalizadas
const functions = {
  linearGradient: (color1, color2) => `linear-gradient(${color1}, ${color2})`,
  boxShadow: (offset, blurRadius, color, opacity) => 
    `0px ${offset[1]}px ${blurRadius}px ${color}${opacity}`,
  pxToRem: (size) => `${size / 16}rem`,
  rgba: (color, opacity) => `rgba(${color}, ${opacity})`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    gradients: {
      primary: {
        main: "#1976d2",
        state: "#004ba0",
      },
      secondary: {
        main: "#dc004e",
        state: "#9a0036",
      },
      dark: {
        main: "#333333",
        state: "#000000",
      },
    },
    grey: {
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    white: {
      main: "#ffffff",
      focus: "#f0f0f0",
    },
    dark: {
      main: "#000000",
    },
    text: {
      main: "#000000",
    },
    transparent: {
      main: "transparent",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
  },
  functions,
  borders: {
    borderRadius: {
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      xxl: "32px",
      section: "160px",
    },
  },
  boxShadows: {
    xs: "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)",
    sm: "0px 2px 4px rgba(0, 0, 0, 0.2), 0px 3px 1px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    md: "0px 4px 5px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.14), 0px 2px 4px rgba(0, 0, 0, 0.12)",
    lg: "0px 8px 10px rgba(0, 0, 0, 0.2), 0px 3px 14px rgba(0, 0, 0, 0.14), 0px 5px 5px rgba(0, 0, 0, 0.12)",
    xl: "0px 16px 24px rgba(0, 0, 0, 0.2), 0px 6px 30px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.12)",
    xxl: "0px 24px 38px rgba(0, 0, 0, 0.2), 0px 9px 46px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.12)",
    inset: "inset 0px 1px 2px rgba(0, 0, 0, 0.24)",
    colored: {
      primary: "0px 1px 3px rgba(25, 118, 210, 0.2)",
      secondary: "0px 1px 3px rgba(220, 0, 78, 0.2)",
      dark: "0px 1px 3px rgba(51, 51, 51, 0.2)",
    },
  },
});

export default theme;
