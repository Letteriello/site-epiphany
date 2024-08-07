import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MKButtonRoot = styled(Button)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { color, variant, size, circular, iconOnly } = ownerState;

  const { white, text, transparent, gradients, dark } = palette;
  const { boxShadow, linearGradient, pxToRem, rgba } = functions;
  const { borderRadius } = borders;
  const { colored } = boxShadows;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    const backgroundValue = palette[color] ? palette[color].main : white.main;
    const focusedBackgroundValue = palette[color] ? palette[color].focus : white.focus;
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], 3, palette[color].main, 0.15)}, ${boxShadow(
          [0, 3],
          1,
          palette[color].main,
          0.2
        )}, ${boxShadow([0, 1], 5, palette[color].main, 0.15)}`
      : "none";
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], 26, palette[color].main, 0.4)}, ${boxShadow(
          [0, 4],
          23,
          palette[color].main,
          0.15
        )}, ${boxShadow([0, 8], 10, palette[color].main, 0.2)}`
      : "none";

    let colorValue = white.main;
    if (color === "default" || !palette[color]) {
      colorValue = text.main;
    } else if (color === "white" || color === "light") {
      colorValue = dark.main;
    }

    let focusedColorValue = white.main;
    if (color === "default") {
      focusedColorValue = text.main;
    } else if (color === "white") {
      focusedColorValue = dark.main;
    } else if (color === "primary" || color === "error" || color === "dark") {
      focusedColorValue = white.main;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,
      "&:hover": {
        backgroundColor: backgroundValue,
        boxShadow: hoveredBoxShadowValue,
      },
      "&:focus:not(:hover)": {
        backgroundColor: focusedBackgroundValue,
        boxShadow: palette[color]
          ? boxShadow([0, 0], 3.2, palette[color].main, 0.5)
          : boxShadow([0, 0], 3.2, white.main, 0.5),
      },
      "&:disabled": {
        backgroundColor: backgroundValue,
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with variant="outlined"
  const outlinedStyles = () => {
    const backgroundValue = color === "white" ? rgba(white.main, 0.1) : transparent.main;
    const colorValue = palette[color] ? palette[color].main : white.main;
    const boxShadowValue = palette[color]
      ? boxShadow([0, 0], 3.2, palette[color].main, 0.5)
      : boxShadow([0, 0], 3.2, white.main, 0.5);
    let borderColorValue = palette[color] ? palette[color].main : rgba(white.main, 0.75);
    if (color === "white") {
      borderColorValue = rgba(white.main, 0.75);
    }

    return {
      background: backgroundValue,
      color: colorValue,
      borderColor: borderColorValue,
      "&:hover": {
        background: transparent.main,
        borderColor: colorValue,
      },
      "&:focus:not(:hover)": {
        background: transparent.main,
        boxShadow: boxShadowValue,
      },
      "&:active:not(:hover)": {
        backgroundColor: colorValue,
        color: white.main,
        opacity: 0.85,
      },
      "&:disabled": {
        color: colorValue,
        borderColor: colorValue,
      },
    };
  };

  // styles for the button with variant="gradient"
  const gradientStyles = () => {
    const backgroundValue =
      color === "white" || !gradients[color]
        ? white.main
        : linearGradient(gradients[color].main, gradients[color].state);
    const boxShadowValue = colored[color]
      ? `${boxShadow([0, 3], 3, palette[color].main, 0.15)}, ${boxShadow(
          [0, 3],
          1,
          palette[color].main,
          0.2
        )}, ${boxShadow([0, 1], 5, palette[color].main, 0.15)}`
      : "none";
    const hoveredBoxShadowValue = colored[color]
      ? `${boxShadow([0, 14], 26, palette[color].main, 0.4)}, ${boxShadow(
          [0, 4],
          23,
          palette[color].main,
          0.15
        )}, ${boxShadow([0, 8], 10, palette[color].main, 0.2)}`
      : "none";
    let colorValue = white.main;
    if (color === "white") {
      colorValue = text.main;
    } else if (color === "light") {
      colorValue = gradients.dark.state;
    }

    return {
      background: backgroundValue,
      color: colorValue,
      boxShadow: boxShadowValue,
      "&:hover": {
        backgroundColor: white.main,
        boxShadow: hoveredBoxShadowValue,
      },
      "&:focus:not(:hover)": {
        boxShadow: boxShadowValue,
      },
      "&:disabled": {
        background: backgroundValue,
        color: colorValue,
      },
    };
  };

  // styles for the button with variant="text"
  const textStyles = () => {
    const colorValue = palette[color] ? palette[color].main : white.main;
    const focusedColorValue = palette[color] ? palette[color].focus : white.focus;
    return {
      color: colorValue,
      "&:hover": {
        color: focusedColorValue,
      },
      "&:focus:not(:hover)": {
        color: focusedColorValue,
      },
    };
  };

  // styles for the button with circular={true}
  const circularStyles = () => ({
    borderRadius: borderRadius.section,
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = () => {
    let sizeValue = pxToRem(38);
    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    }
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;
    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,
      "& .material-icons": {
        marginTop: 0,
      },
      "&:hover, &:focus, &:active": {
        transform: "none",
      },
    };
  };

  return {
    ...(variant === "contained" && containedStyles()),
    ...(variant === "outlined" && outlinedStyles()),
    ...(variant === "gradient" && gradientStyles()),
    ...(variant === "text" && textStyles()),
    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});

export default MKButtonRoot;
