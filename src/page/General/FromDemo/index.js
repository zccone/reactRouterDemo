import React from 'react'
import {Collapse, Input, Button, Row, Col,} from 'antd';

const Panel = Collapse.Panel;


class FromDemo extends React.Component {
	constructor (props) {
		super(props);
		//初始化变量
		this.state = {
			disabled: {
				noEntry: false,
			},
			text:{
				input1:"禁止输入",
			},
			val:{
				input:'',
			}
		};
	}

	watch=(e)=>{
		console.log(e.target.value);
		let _val = Object.assign({}, this.state.val, { input: e.target.value});
		this.setState({
			val:_val,
		})
	}
	//Input输入框-输入状态切换
	noEntry = () => {
		console.log(this.state.val.input)
		let _input1="";
		(this.state.disabled.noEntry)?_input1="禁止输入":_input1="允许输入"
		let _disabled = Object.assign({}, this.state.disabled, { noEntry: !this.state.disabled.noEntry });
		let _text = Object.assign({}, this.state.text, { input1: _input1});
		this.setState({
			disabled:_disabled,
			text:_text,
		})

	}
	render() {

		return (
			<Collapse defaultActiveKey={['1']}>
				<Panel header="Input输入框" key="1">
					<Row gutter={16}>
						<Col className="gutter-row" span={6}>
							<Input placeholder="普通输入" onChange={this.watch} defaultValue={this.state.val.input} disabled={this.state.disabled.noEntry}/>
						</Col>
						<Col className="gutter-row" span={6}>
							<Button type="primary" htmlType="submit"
								onClick={this.noEntry}
								className="login-form-button">{this.state.text.input1} </Button>
						</Col>
					</Row>
				</Panel>
				<Panel header="基础表单" key="2">
				</Panel>
			</Collapse>

		)
	}
}

export default FromDemo