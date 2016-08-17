import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from "./pages/App";
import Cursos from "./pages/Cursos";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";

ReactDom.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="/cursos" component={Cursos} />
				<Route path="/sobre" component={Sobre} />
			</Route>
		</Router>
	),
	document.getElementById("app")
);