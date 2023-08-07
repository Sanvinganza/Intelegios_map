import { Space, Table } from "antd";

export interface ICoordinatesTableProps {
  data: {
    key: number;
    name: string;
  }[];
}

const columns = [
  {
    dataIndex: "name",
    key: "name",
    render: (text: string) => (
      <Space size="middle">
        <a href="/">{text}</a>
      </Space>
    ),
  },
];

export const CoordinatesTable = ({ data }: ICoordinatesTableProps) => (
  <Table
    style={{background: "white"}}
    showHeader={false}
    columns={columns}
    dataSource={data}
    pagination={false}
  />
);
