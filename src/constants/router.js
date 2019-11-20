import { root } from './route-constants';

import Home from '../views/Home';
/**
 * @description
 * Private array router
 */
export const privateRouter = [
  {
    path: root,
    component: Home,
    exact: true,
  }
];
