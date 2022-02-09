export interface Irecipes {
  text: string;
  srcInAssets: string;
  id: string;
}
export interface Irecent {
  text: string;
  version: string;
  iconSrc: string;
  id: string;
}
export interface IData {
  recent: [Irecent];
  recipes: [Irecipes];
}
