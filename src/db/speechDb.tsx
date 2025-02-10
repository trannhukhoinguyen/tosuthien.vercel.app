import DeshanXuanjian from "../db/speeches/DeshanXuanjian.tsx";
import NanyangHuizhong from "../db/speeches/NanyangHuizhong.tsx";
import GuifengZongmi from "../db/speeches/GuifengZongmi.tsx";

const speechDb = [
  ...DeshanXuanjian,
  ...NanyangHuizhong,
  ...GuifengZongmi,
]
export default speechDb;
