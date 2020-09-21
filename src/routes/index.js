import Dashboard from '../views/dashboard/Dashboard';
import Login from '../views/login/Login';

const indexRoutes = [
  { path: "/login", component: Login },
  { path: "/", component: Dashboard },
];

export default indexRoutes;