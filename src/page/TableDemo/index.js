import React from 'react'
import {Collapse,Table } from 'antd';

const Panel = Collapse.Panel;
const columns = [{
	title: '姓名',
	dataIndex: 'name',
	render: text => <a href="javascript:void(0);">{text}</a>,
}, {
	title: '年龄',
	dataIndex: 'age',
}, {
	title: '地址',
	dataIndex: 'address',
}];
const data = [{
	key: '1',
	name: 'John Brown',
	age: 32,
	address: 'New York No. 1 Lake Park',
}, {
	key: '2',
	name: 'Jim Green',
	age: 42,
	address: 'London No. 1 Lake Park',
},];
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: record => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name,
	}),
};
	class TableDemo extends React.Component {
	render() {
		return (
			<div>
			<Collapse defaultActiveKey={['1']}>
				<Panel header="基本表格" key="1">
					<Table rowSelection={rowSelection} columns={columns} dataSource={data} />
				</Panel>
			</Collapse>
			</div>
		)
	}
}

export default TableDemo