/**
 * 角色：企业管理员
 * 教务信息管理->周志管理
 */
import dynamic from 'next/dynamic';

import MyLayout from '../layouts/index';
const Compose = dynamic(() => import('../inner-page/weekly/compose'));

export default function Weekly() {
  console.log('Weekly');
  return <Compose />;
}
Weekly.Layout = MyLayout;