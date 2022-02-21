import Home from "../views/Home";
import ButtonView from "../views/PublicView/Button/ButtonView";
import FormLayout from "../views/FormView/FormLayout";
import FormAddSubtractFields from "../views/FormView/FormAddSubtractFields";

const routes: any = [
  { path: '/index', exact: true, name: '首页', component: Home, auth: [1] },
  { path: '/public/button', exact: true, name: '图标', component: ButtonView, auth: [1] },
  { path: '/form/tab', exact: true, name: 'form切换', component: FormLayout, auth: [1] },
  { path: '/form/embedded', exact: true, name: '动态增减嵌套字段', component: FormAddSubtractFields, auth: [1] },
]

export default routes;
