import { root } from './route-constants';

import Home from '../containers/Home';
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
