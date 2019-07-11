import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'

class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={global.Main}/>
					<Route exact path='/page/es6' component={global.es6}/>
					<Route exact path='/page/general/fromDemo' component={global.FromDemo}/>
					<Route exact path='/page/AlertDemo' component={global.Alert}/>
					<Route exact path='/page/TableDemo' component={global.Table}/>
					<Route exact path='/page/HttpDemo' component={global.HttpDemo}/>
					<Route exact path='/page/TreeDemo' component={global.TreeDemo}/>

				</Switch>
			</div>
		)
	}
}

export default ContentMain