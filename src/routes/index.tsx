import Home from "../views/Home";

const routes: any = [
  { path: '/index', exact: true, name: 'Index', component: Home, auth: [1] },
]

export default routes;
