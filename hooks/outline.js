const outlineDebug = false;

const colors = [
  "#ff0000",
  "#ff9000",
  "#fff000",
  "#66ff00",
  "#0033ff",
  "#9900ff",
  "#ffffff",
];
const setOutline = () => {
  const rand = Math.floor(Math.random() * colors.length);
  const outline = { borderColor: colors[rand], borderWidth: 2 };
  return outline;
};

export const randomOutline = outlineDebug ? setOutline : "";

const getColor = (color) => {
  switch (color) {
    case "red":
      return colors[0];
    case "orange":
      return colors[1];
    case "yellow":
      return colors[2];
    case "green":
      return colors[3];
    case "blue":
      return colors[4];
    case "purple":
      return colors[5];
    case "white":
      return colors[6];
    default:
      return colors[6];
  }
};

export const definedOutline = (color) => {
  const outlineColor = getColor(color || "white");
  const outline = { borderColor: outlineColor, borderWidth: 2 };
  return outlineDebug ? outline : "";
};
