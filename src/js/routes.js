import HomePage from '../pages/home.jsx';
import NotFoundPage from '../pages/404.jsx';
import SetupPasswordPage from '../pages/setup-password.jsx';
import SetupLinePage from '../pages/setup-line.jsx';
import SetupDiscordPage from '../pages/setup-discord.jsx';
import SetupDonePage from '../pages/setup-done.jsx';
import CourseDetailsCorePage from '../pages/course-details-core.jsx';
import CourseDetailsOnePage from '../pages/course-details-one.jsx';
import CourseDetailsRangePage from '../pages/course-details-range.jsx';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/setup-password',
    component: SetupPasswordPage,
  },
  {
    path: '/setup-line',
    component: SetupLinePage,
  },
  {
    path: '/setup-discord',
    component: SetupDiscordPage,
  },
  {
    path: '/setup-done',
    component: SetupDonePage,
  },
  {
    path: '/course-details-core',
    component: CourseDetailsCorePage,
  },
  {
    path: '/course-details-one',
    component: CourseDetailsOnePage,
  },
  {
    path: '/course-details-range',
    component: CourseDetailsRangePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;