import { Layout } from 'antd'
import './App.css'
import Header from './components/header'
import Sider from './components/sider'
import Content from './components/content'

function App() {

  return (
    <Layout>
      <Header />
      <Layout className='flex-1'>
        <Sider />
        <Content />
      </Layout>
    </Layout>
    //   <h1>
    //     天天总想着干些什么，但不知道干啥。
    //     想了想 不如搞个网站 随便记录点东西 不管怎样 写下点东西总是好的
    //   </h1>
    // </>
  )
}

export default App
