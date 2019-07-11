import React from 'react'
// import {releaseConfigure} from "../../utils/configRelease";
//表格组件
import TableList from "../../components/TableList/index";//导航
import {Collapse } from 'antd';
const Panel = Collapse.Panel;
class HttpDemo extends React.Component {
	constructor(props) {
		super(props);
		//在state设置两个属性，以便后续通过state对象来对其进行修改
		this.state = {
			tableList: {},
			pageIndex: 1,
		};
		//绑定挂载事件
	}

	componentDidMount() {
		this.DealList();
	};

	//分页回调
	paginationNum(mode) {
		console.log("分页回调", mode);
		this.setState({pageIndex: mode}, () => {
			this.DealList();
		})
	}
	//处理列表数据
	DealList = () => {
		let _param = {'pageIndex': this.state.pageIndex};
		let data = global.HttpData("get", global.GETUSERLIST, _param)
		console.log(data)
		data.then(res => {
			if (!res) return;
			let _res = Object.assign({}, JSON.parse(JSON.stringify(res)));
			_res.header = [{title: '姓名', dataIndex: 'name', key: 'name',},
				{title: '职称', dataIndex: 'displayName', key: 'displayName',},
				{title: '账号', dataIndex: 'account', key: 'account',},
				{title: '邮箱', dataIndex: 'email', key: 'email',},
				{title: '电话', dataIndex: 'telphone', key: 'telphone',}]
			this.setState({
				tableList: _res,
			});
			console.log(this.state)
		})
	};

	render() {
		return (
			<div>
				<Collapse defaultActiveKey={['1']}>
					<Panel header="表格组件" key="1">
						<TableList paginationNum={mode => this.paginationNum(mode)} msg={this.state.tableList}/>
					</Panel>
				</Collapse>
			</div>
		)
	}
}

export default HttpDemo