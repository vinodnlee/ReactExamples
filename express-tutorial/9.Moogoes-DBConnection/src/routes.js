import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';

const routes = {
  component: Base,
  childRoutes: [
    {
      path: '/',
      component: LoginPage
    }
  ]
};

export default routes;
