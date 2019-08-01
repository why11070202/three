import Vue from 'vue'
import {
  Search,
  Grid,
  GridItem,
  Divider,
  DropdownMenu,
  DropdownItem,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
} from 'vant'

export default () => {
  Vue.use(Search)
  Vue.use(Grid).use(GridItem)
  Vue.use(Divider)
  Vue.use(DropdownMenu).use(DropdownItem)
  Vue.use(Tabbar).use(TabbarItem)
  Vue.use(Tab).use(Tabs)
}
