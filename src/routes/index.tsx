import Home from "../views/Home";
import ButtonView from "../views/PublicView/Button/ButtonView";

const routes: any = [
  { path: '/', exact: true, name: '首页', component: Home, auth: [1] },
  { path: '/public/button', exact: true, name: '图标', component: ButtonView, auth: [1] },
]

export default routes;
