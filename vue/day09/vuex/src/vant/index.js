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
  List,
  Cell,
  CellGroup,
  Card,
  Area,
  Field,
  Button,
  Popup,
  Loading
} from 'vant'

export default () => {
  Vue.use(Search)
  Vue.use(Grid).use(GridItem)
  Vue.use(Divider)
  Vue.use(DropdownMenu).use(DropdownItem)
  Vue.use(Tabbar).use(TabbarItem)
  Vue.use(Tab).use(Tabs)
  Vue.use(List)
  Vue.use(Cell).use(CellGroup)
  Vue.use(Card)
  Vue.use(Area)
  Vue.use(Field)
  Vue.use(Button)
  Vue.use(Popup)
  Vue.use(Loading);

}