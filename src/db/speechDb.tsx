import DeshanXuanjian from "../db/speeches/DeshanXuanjian.tsx";
import NanyangHuizhong from "../db/speeches/NanyangHuizhong.tsx";
import GuifengZongmi from "../db/speeches/GuifengZongmi.tsx";
import LinjiYixuan from "../db/speeches/LinjiYixuan.tsx";
import FoyanQingyuan from "../db/speeches/FoyanQingyuan.tsx";
import YangqiFanghui from "../db/speeches/YangqiFanghui.tsx";
import XuanshaShibei from "../db/speeches/XuanshaShibei.tsx";
import YunmenWenyan from "../db/speeches/YunmenWenyan.tsx";

const speechDb = [
  ...NanyangHuizhong,
  ...GuifengZongmi,
  ...LinjiYixuan,
  ...FoyanQingyuan,
  ...YangqiFanghui,
  ...XuanshaShibei,
  ...YunmenWenyan,
  ...DeshanXuanjian,
]
export default speechDb;
