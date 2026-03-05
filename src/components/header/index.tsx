import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout } from 'antd';
import logo from '@/assets/logo.jpg';
import { useState } from 'react';
import { useGlobalContext } from '@/context/GlobalContext';

const FormItem = Form.Item;

const { Header: AntHeader } = Layout;
const Header = () => {
    const { collapsed, setCollapsedState } = useGlobalContext();
    return <AntHeader className='flex items-center justify-between w-full px-0!'>
        <div className='flex gap-4 items-center pl-3!'>
            <div onClick={() => setCollapsedState(!collapsed)} className='text-2xl text-[#8c8c8c] cursor-pointer hover:text-white'>
                {
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
            </div>
            <div className='text-white'><img width="35" height="35" className='rounded-[100%]' src={logo} /></div>
        </div>
        <div>
            <Form layout='inline'>
                <FormItem><Input /></FormItem>
                <FormItem><Button type="primary" icon={<SearchOutlined />}>搜索</Button></FormItem>
            </Form>
        </div>
        <div></div>
    </AntHeader>;
};

export default Header;