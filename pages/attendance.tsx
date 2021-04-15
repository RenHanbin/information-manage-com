/**
 * 角色：企业管理员
 * 教务信息管理->考勤管理
 */
import dynamic from 'next/dynamic';

import MyLayout from 'layouts/index';
import PageLoading from 'components/page-loading';
const Compose = dynamic(() => import('inner-page/attendance/compose'), {
  ssr: false,
  loading: PageLoading,
});

export default function Attendance() {
  console.log('Attendance');
  return <Compose />;
}
Attendance.Layout = MyLayout;
