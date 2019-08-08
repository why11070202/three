import Vue from 'vue'
import {
    Search,
    Icon,
    Swipe,
    SwipeItem,
    Lazyload,
    Grid,
    GridItem,
    Card,
    Divider,
    List,
    Cell,
    CellGroup,
    Tag,
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    IndexBar,
    IndexAnchor,
    Field,
    Button,
    Popup


} from 'vant';

export default () => {
    Vue.use(Search)
    Vue.use(Icon)
    Vue.use(Swipe).use(SwipeItem)
    Vue.use(Lazyload)
    Vue.use(Grid).use(GridItem)
    Vue.use(Card)
    Vue.use(Divider)
    Vue.use(List)
    Vue.use(Cell).use(CellGroup)
    Vue.use(Tag)
    Vue.use(Tabbar).use(TabbarItem)
    Vue.use(Tab).use(Tabs)
    Vue.use(IndexBar).use(IndexAnchor)
    Vue.use(Field);
    Vue.use(Button);
    Vue.use(Popup);

}