import React, {Component} from 'react';
//全局文件
import './main';
//路由
import {BrowserRouter} from 'react-router-dom';

//布局组件
import CustomMenu from "./components/Menu/index";//导航
import ContentMain from './components/ContentMain'//主题

//UI-antd-按需引入
import 'antd/dist/antd.css';
import {Layout } from 'antd';

const {
	Sider, Content,
} = Layout;

let screenHeight= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

class App extends Component {
	render() {
		return (
			<div className="App" >
				<BrowserRouter>
					<Layout>
						<Sider className="App-customMenu" style={{height:screenHeight}}>
							<CustomMenu/>
						</Sider>
						<Layout>
							{/*<Header>Header</Header>*/}
							<Content className="App-contentMain" style={{height:screenHeight}}>
								<ContentMain/>
							</Content>
							{/*<Footer>Footer</Footer>*/}
						</Layout>
					</Layout>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
