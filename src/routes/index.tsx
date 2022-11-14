import Home from "../views/Home";
import CustomerButton from '../views/PublicView/Button/customButton';
import UploadView from "../views/PublicView/Upload";
import Barrage from '../views/PublicView/barrage/barrage'
import Interactive from '../views/PublicView/interactive/interactive'
import Charts from '../views/PublicView/charts'
import Rolling from '../views/PublicView/Rolling/Rolling'
import Typography from '../views/PublicView/Typography'
import FormLayout from "../views/FormView/FormTab";
import FormAddSubtractFields from "../views/FormView/FormAddSubtractFields";
import BaseTab from "../views/Table/BaseTable";
import SearchTable from "../views/Table/SearchTable/SearchTable";
import FormCalculate from "../views/FormView/FormCalculate";
import FormStepView from "../views/FormView/FormStep";
import FormBaseView from "../views/FormView/FormBaseView";
import TransformZoom from '../views/Transform/TransformZoom/TransformZoom'
import TransformRotate from '../views/Transform/TransformRotate/TransformRotate'
import Notes from '../views/Components/Notes/index'
import Cascader from '../views/Components/Cascader'
import Editor from '../views/Practice/Editor'
import AboutUs from "../views/About/AboutUs";

// auth 权限管理，只要存在页面内容可以存在
// 登录权限 login 角色权限 role 内容权限 content
const routes: any = [
  {
    path: '/home', exact: true, name: '首页', component: Home, auth: [1], meta: { login: true, content: true, role: true }
  },
  // {
  //   path: '/public/button', exact: true, name: '按钮', component: ButtonView, auth: [1], meta: {
  //     login: true, content: true, role: true
  //   }
  // },
  {
    path: '/public/myCopy',
    exact: true,
    name: '复制',
    component: CustomerButton,
    auth: [1],
    meta: { login: true, content: true, role: true }
  },
  {
    path: '/public/upload', exact: true, name: '上传', component: UploadView, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/public/barrage', exact: true, name: '弹幕', component: Barrage, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/public/interactive', exact: true, name: '互动', component: Interactive, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/public/charts', exact: true, name: '图表', component: Charts, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/public/rolling', exact: true, name: '滚动', component: Rolling, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/public/typography', exact: true, name: '排版', component: Typography, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/form/tab', exact: true, name: 'form切换', component: FormLayout, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/form/embedded', exact: true, name: '动态增减嵌套字段', component: FormAddSubtractFields, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/form/calculate', exact: true, name: '自动计算百分比', component: FormCalculate, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/form/step', exact: true, name: '步骤表单', component: FormStepView, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/form/base', exact: true, name: '基本表单', component: FormBaseView, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/tabs/tab', exact: true, name: '最基本的表格', component: BaseTab, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/tabs/searchTable', exact: true, name: '搜索表单', component: SearchTable, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/transform/zoom', exact: true, name: '缩放', component: TransformZoom, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/transform/rotate', exact: true, name: '旋转', component: TransformRotate, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/components/notes', exact: true, name: '笔记', component: Notes, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/components/cascader', exact: true, name: '次级选择', component: Cascader, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/practice/editor', exact: true, name: '编辑器', component: Editor, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
  {
    path: '/about', exact: true, name: '关于我们', component: AboutUs, auth: [1], meta: {
      login: true, content: true, role: true
    }
  },
];

export default routes;
