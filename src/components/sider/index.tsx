import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useGlobalContext } from '@/context/GlobalContext';
import { BookOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider: AntSider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {
        key: 'books',
        label: '书籍',
        icon: <BookOutlined />,
        children: [
            {
                key: '/books/2026',
                label: '2026 必读清单',
            },
        ],
    },
];

const Sider = () => {
    const { collapsed } = useGlobalContext();
    const navigate = useNavigate();
    const onClick: MenuProps['onClick'] = (item) => {
        navigate(item.key);
    };
    return <AntSider trigger={null} collapsible collapsed={collapsed}>
        <Menu
            theme="dark"
            onClick={onClick}
            defaultSelectedKeys={['1']}
            mode="inline"
            items={items} />
    </AntSider>;
};

export default Sider;