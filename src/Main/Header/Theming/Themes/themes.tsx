import DefaultTheme from "./default";
import HackerTheme from "./hacker";
import RomanceTheme from "./romance";
import ScreenwriterTheme from "./screenwriter";
import TeacherTheme from "./teacher";

export const themes = [
  "Default",
  "Software Developer",
  "Romance Author",
  "Screenwriter",
  "Teacher",
];

export const chooseTheme = (themeName: string) => {
  switch (themeName) {
    case "Default":
      return DefaultTheme;
    case "Software Developer":
      return HackerTheme;
    case "Romance Author":
      return RomanceTheme;
    case "Screenwriter":
      return ScreenwriterTheme;
    case "Teacher":
      return TeacherTheme;
    default:
      return DefaultTheme;
  }
};
