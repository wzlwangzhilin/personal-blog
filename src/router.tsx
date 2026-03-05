import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BooksPage from './page/books';
// 1. 定义路由配置
const router = createBrowserRouter([
    {
        path: '/', // 根路径
        element: <App />, // 根组件（可嵌套子路由）
        errorElement: <h1>404 Not Found</h1>, // 全局404/错误页面
        children: [ // 嵌套路由（App 组件内需放 <Outlet /> 显示子路由）
            // {
            //     path: '', // 根路径默认渲染 Home
            //     element: <Home />,
            // },
            {
                path: '/books/2026', // 对应 /books
                element: <BooksPage />,
            },
            // {
            //     path: 'about', // 对应 /about
            //     element: <About />,
            // },
            // {
            //     path: 'user/:id', // 动态路由传参（:id 为参数）
            //     element: <User />,
            // },
            // {
            //     path: 'dashboard', // 嵌套路由父级
            //     element: <Dashboard />,
            //     children: [
            //         { path: 'profile', element: <Profile /> }, // /dashboard/profile
            //         { path: 'settings', element: <Settings /> }, // /dashboard/settings
            //     ],
            // },
        ],
    },
]);

// 2. 挂载路由（React 19 入口写法）
export default function Router() {
    return <RouterProvider router={router} />;
}