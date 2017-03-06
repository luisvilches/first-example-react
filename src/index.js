import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';


class Contenedor extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
			</div>
		)
	}	
}

ReactDOM.render(
  <Contenedor />,
  document.getElementById('root')
);