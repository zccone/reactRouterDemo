import React from 'react'
import {Collapse, Row,} from 'antd';

const Panel = Collapse.Panel;


class FromDemo extends React.Component {
	constructor (props) {
		super(props);
		//初始化变量
		this.state = {
			test:this.isfirstLoad,
		};
	};

	isfirstLoad(){
		var _list=[];
		return function(id){
			if(_list.indexof(id)>=0){
				return false;
			}else{
				return true;
			}
		}
	};

	f=(x, yy)=> {
	function isfirstLoad(){
			let _list=[];
			return function(id){
				console.log(_list.indexOf(id))
				if(_list.indexOf(id)>10){
					return false;
				}else{
					return true;
				}
			}
		};
		let firstLoad=isfirstLoad();
console.log(firstLoad('id'))

	}
	render() {

		return (
			<Collapse defaultActiveKey={['1']}>
				<Panel header="Input输入框" key="1">
					<Row gutter={16}>

						{

							console.log(this.f())
						}
					</Row>
				</Panel>
			</Collapse>

		)
	}
}

export default FromDemo