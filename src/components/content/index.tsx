import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content: AntContent } = Layout;

const Content = () => {
    return <AntContent className='p-4'><Outlet /></AntContent>;
};

export default Content;