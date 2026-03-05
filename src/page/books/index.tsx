import { Table } from "antd";

const columns = [
    {
        title: '书籍',
        dataIndex: 'book',
        key: 'book',
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: '备注',
        dataIndex: 'notes',
        key: 'notes',
    },
];

const BooksPage = () => {
    return (
        <div>
            <p>2026 必读清单</p>
            <Table columns={columns} dataSource={[]} />
        </div>
    );
};

export default BooksPage;