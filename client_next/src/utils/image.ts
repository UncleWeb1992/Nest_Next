export const filesColor = {
  png: "purple",
  img: "orange",
  jpeg: "green",
  jpg: "magenta",
  gif: "yellow",
};

type Extension = keyof typeof filesColor;

type ExtColor = (typeof filesColor)[Extension];

export const getImageExt = (name: string): Extension =>
  name.split(".").pop() as Extension;
export const getColorByExt = (ext: Extension): ExtColor => filesColor[ext];
