import { Input, Modal, Select, Space } from 'antd';

const { Search } = Input;
const { Option } = Select;

const Config = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Space>
          项目年份：
          <Select
            defaultValue="全部"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="全部">全部</Option>
            <Option value="2019">2019</Option>
            <Option value="2018">2018</Option>
            <Option value="2020">2020</Option>
          </Select>
          项目状态：
          <Select
            defaultValue="全部"
            style={{ width: 120 }}
            onChange={() => {}}
          >
            <Option value="全部">全部</Option>
            <Option value="未申请">未申请</Option>
            <Option value="申请中">已通过</Option>
            <Option value="申请通过">已驳回</Option>
          </Select>
          <Search placeholder="搜索" style={{ width: 200 }} />
        </Space>
      </div>
    </>
  );
};

export default Config;
