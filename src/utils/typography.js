import Typography from "typography";
import doelgerTheme from "typography-theme-doelger";
import colors from "./colors";

doelgerTheme.overrideThemeStyles = ({ rhythm }) => {
  const linkColor = colors.main;

  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a.anchor": {
      backgroundImage: "none",
    },
    a: {
      color: linkColor,
      backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`,
    },
    blockquote: {
      borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
    },
  };
};

delete doelgerTheme.googleFonts;

const typography = new Typography(doelgerTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
