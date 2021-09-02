import React,{useState,useEffect} from 'react'
import {Button,Layout,Menu} from 'antd';
import './App.css';
import {Link,Switch,Route,HashRouter as Router} from 'react-router-dom'
import Setting from './pages/setting'
import Home from './pages/home'
import WithMemo from './pages/useMemo'
import Hobby from './pages/hobby'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const App = () => {
	const [collapsed,setColl] = useState(false)
	const [count,setCount] = useState('1')
	
	const setC = () =>{
		setCount('2')
	}
	return (
		<Router>
			<Layout>
			
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							<Link to="/">Home</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							<Link to="/setting">Setting</Link>
						</Menu.Item>
						<Menu.Item key="3" icon={<UploadOutlined />} >
							<Link to="/withmemo">WithMemo</Link>
						</Menu.Item>
						<Menu.Item key="4" icon={<UploadOutlined />} >
							<Link to="/hobby">Hobby</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout" style={{height:'100vh'}}>
					<Header className="site-layout-background" style={{ padding: -1,backgroundColor:'#ffffff'}}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
					 className: 'trigger',
					 onClick:()=>{setColl(!collapsed)},
					})}
					</Header>
					<Content
					className="site-layout-background"
					style={{
					  margin: '24px 16px',
					  padding: 24,
					  minHeight: 280,
					}}
					>
						<Switch>
							<Route exact path={'/'} component={Home}/>
							<Route exact path={'/setting'} component={Setting}/>
							<Route exact path={'/withmemo'} component={WithMemo}/>
							<Route exact path={'/hobby'} component={Hobby}/>
						</Switch>
					</Content>
				</Layout>
			</Layout>
		</Router>
	)
}

export default App;
