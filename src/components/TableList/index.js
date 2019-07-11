import React from "react";
import {Table } from 'antd';

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};
class TableList extends React.Component {

	constructor(props) {
		super(props);
	}
	handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
		console.log(pagination.current)
		this.props.paginationNum(pagination.current)
	}
	render() {
		const columns =this.props.msg.header;
		const data =this.props.msg.items;
		let pagination = {
			total: this.props.msg.totalCount,
			pageSize: 10,}
		return (

			<div style={{background:"#fff"}}>
				{/*{this.props.msg}*/}
				<Table rowKey="ad" columns={columns} dataSource={data}
				       pagination={pagination} onChange={this.handleChange}/>
			</div>
		)
	}
}
export default TableList