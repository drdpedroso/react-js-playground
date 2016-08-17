import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, hashHistory} from 'react-router'

import App from "./pages/App";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";

ReactDom.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<Route path="/cursos" component={Cursos} />
				<Route path="/sobre" component={Sobre} />
			</Route>
		</Router>
	),
	document.getElementById("app")
);