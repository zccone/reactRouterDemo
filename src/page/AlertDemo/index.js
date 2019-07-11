import React from 'react'
import {Collapse, Modal, Button, Row, Col} from 'antd';

const Panel = Collapse.Panel;


class AlertDemo extends React.Component {
	constructor (props) {
		super(props);
		//初始化变量
		this.state = {
			visible: false,
			msg:"可更改提示语",
		};
	}
	showModal = (str) => {
		console.log(str)
		this.setState(function(state) {
			return {visible: true,msg:state.msg+"-"+str};
		});
	}
	handleOk = (e) => {
		console.log(this.state );
		this.setState({
			visible: false,
		});
	}
	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	}
	render() {
		return (
			<div>
			<Collapse defaultActiveKey={['1']}>
				<Panel header="确认提醒（页面形式）" key="1">
					<Row gutter={16}>
						<Col className="gutter-row" span={6}>
							<Button type="primary" htmlType="submit"
								onClick={this.showModal.bind(this, "啦")}
								className="login-form-button">确认</Button>
						</Col>
					</Row>
				</Panel>
			</Collapse>

				<Modal
					title="确认提醒"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					{this.state.msg}
				</Modal>
			</div>
		)
	}
}

export default AlertDemo