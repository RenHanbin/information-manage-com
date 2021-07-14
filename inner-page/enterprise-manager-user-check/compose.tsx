import Mock from 'mockjs';
import Search from 'inner-page/enterprise-manager-user-check/search';
import Show from 'inner-page/enterprise-manager-user-check/show';
import { useState } from 'react';

const { data }: { data: PT.User[] } = Mock.mock({
  'data|10': [
    {
      'key|+1': 1,
      'index|+1': 1,
      'ID|+1': ['12345', '23456', '45678'],
      name: '@cname()',
      role: '示范点导师',
      'organ|+1': ['广东工业大学', '广东财经大学'],
      teacher: '@cname()',
      time: '@date("yyyy-MM-dd")',
    },
  ],
});
const Compose = () => {
  let [dataSource] = useState(data);
  return (
    <>
      <Search />
      <Show dataSource={dataSource} />
    </>
  );
};

export default Compose;
