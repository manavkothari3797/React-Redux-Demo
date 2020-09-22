import Layout from '../components/layout/Layout';
import Login from '../views/login/Login';

const indexRoutes = [
  { path: "/login", component: Login },
  { path: "/", component: Layout },
];

export default indexRoutes;