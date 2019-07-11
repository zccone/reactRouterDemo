import React from 'react'
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';
const menus =global.menus;
//此组件的意义就是将数据抽离出来，通过传递数据去渲染
class CustomMenu extends React.Component {
	handleClick = (e) => {
		console.log('click ', e);
	}
	renderSubMenu = ({key, icon, title, subs}) => {
		return (
			<Menu.SubMenu key={key} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
				{
					subs && subs.map(item => {
						return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
					})
				}
			</Menu.SubMenu>
		)
	}
	renderMenuItem = ({key, icon, title,}) => {
		return (
			<Menu.Item key={key}>
					{/*{icon && <Icon type={icon}/>}*/}
					{/*<span>{title}</span>*/}
				<Link to={key}>
					{icon && <Icon type={icon}/>}
					<span>{title}</span>
				</Link>
			</Menu.Item>
		)
	}
	render() {
		return (

				<Menu
				onClick={this.handleClick}
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				mode="inline"
			>
				{
					menus.map(item => {
						return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
					})
				}
			</Menu>
		)
	}
}
export default CustomMenu
