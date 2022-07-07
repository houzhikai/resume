import Home from "../views/Home";
import ButtonView from "../views/PublicView/Button/ButtonView";
import CustomerButton from '../views/PublicView/Button/customButton';
import UploadView from "../views/PublicView/Upload";
import Barrage from '../views/PublicView/barrage/barrage'
import FormLayout from "../views/FormView/FormTab";
import FormAddSubtractFields from "../views/FormView/FormAddSubtractFields";
import AboutUs from "../views/About/AboutUs";
import BaseTab from "../views/Table/BaseTab";
import SearchTable from "../views/Table/SearchTable/SearchTable";
import FormCalculate from "../views/FormView/FormCalculate";
import FormStepView from "../views/FormView/FormStep";
import FormBaseView from "../views/FormView/FormBaseView";
import TransformZoom from '../views/Transform/TransformZoom/TransformZoom'
import TransformRotate from '../views/Transform/TransformRotate/TransformRotate'


const routes: any = [
  { path: '/index', exact: true, name: '首页', component: Home, auth: [1] },
  { path: '/public/button', exact: true, name: '图标', component: ButtonView, auth: [1] },
  { path: '/public/myCopy', exact: true, name: '复制', component: CustomerButton, auth: [1] },
  { path: '/public/upload', exact: true, name: '上传', component: UploadView, auth: [1] },
  { path: '/public/barrage', exact: true, name: '弹幕', component: Barrage, auth: [1] },
  { path: '/form/tab', exact: true, name: 'form切换', component: FormLayout, auth: [1] },
  { path: '/form/embedded', exact: true, name: '动态增减嵌套字段', component: FormAddSubtractFields, auth: [1] },
  { path: '/form/calculate', exact: true, name: '自动计算百分比', component: FormCalculate, auth: [1] },
  { path: '/form/step', exact: true, name: '步骤表单', component: FormStepView, auth: [1] },
  { path: '/form/base', exact: true, name: '基本表单', component: FormBaseView, auth: [1] },
  { path: '/tabs/tab', exact: true, name: '最基本的表格', component: BaseTab, auth: [1] },
  { path: '/tabs/searchTable', exact: true, name: '搜索表单', component: SearchTable, auth: [1] },
  { path: '/transform/zoom', exact: true, name: '旋转', component: TransformZoom, auth: [1] },
  { path: '/transform/rotate', exact: true, name: '旋转', component: TransformRotate, auth: [1] },
  { path: '/about', exact: true, name: '关于我们', component: AboutUs, auth: [1] },
];

export default routes;
