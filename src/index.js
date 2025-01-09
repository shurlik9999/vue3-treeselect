import Treeselect from "./components/Treeselect.vue";
import treeselectMixin from "./mixins/treeselectMixin.js";

import "../styles/style_1.less";
// import "../styles/style.less";

export default Treeselect;
export { Treeselect, treeselectMixin };
export {
  // Delayed loading.
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH
} from "./constants";

export const VERSION = PKG_VERSION;
