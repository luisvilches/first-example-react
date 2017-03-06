import React from 'react';
import Menu from './data/menuData.js';


class ItemNavBar extends React.Component {
	render() {
		return <a className="mdl-navigation__link" href={this.props.url}>
			{this.props.caption}
		</a>
	}
}


class Nav extends React.Component {
	render() {
		return  (
			<nav className="mdl-navigation">
				{
					this.props.datos.map( list => {
						return <ItemNavBar key={list.url} caption={list.caption} url={list.url}/>
					})
				}
			</nav>
		)
	}
}

class Spacer extends React.Component {
	render() {
		return <div className="mdl-layout-spacer"></div>
	}
}

class TitleNav extends React.Component {
	render() {
		return <span className="mdl-layout-title">{this.props.title}</span>
	}
}

class Container extends React.Component {
	
	render() {
		return (
			<div className="mdl-layout__header-row">
		      <TitleNav title="Title" />
		      <Spacer />
		      <Nav datos={Menu.NavBar} />
		    </div>
		)
	}	
} 
class TabsItem extends React.Component {
	render() {
		return <a href={this.props.href} className="mdl-layout__tab is-active">{this.props.name}</a>
	}
}

class Tabs extends React.Component {
	render() {
		return(
			<div className="mdl-layout__tab-bar mdl-js-ripple-effect">
       			{
       				this.props.data.map( item => {
       					return <TabsItem key={item.enlace} href={item.enlace} name={item.nombre} />
       				})
       			}
			</div>
		)
	}
}

class Header extends React.Component {
	render() {
		return (
			<header className="mdl-layout__header mdl-layout__header--transparent">
		    	<Container />
		    	<Tabs data={Menu.Tabs} />
		  	</header>
		)
	}	
}

class Drawer extends React.Component {
	render() {
		return (
			<div className="mdl-layout__drawer">
			    <TitleNav />
			    <Nav datos={Menu.Drawer}/>
			</div>
		)
	}
}
class MainContent extends React.Component {
	render() {
		return(
			<div className="mdl-layout__content">
			    <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
			      <div className="page-content">
			      	hola 
			      </div>
			    </section>
			    <section className="mdl-layout__tab-panel" id="scroll-tab-2">
			      <div className="page-content">
			      	hola hola 
			      </div>
			    </section>
			    <section className="mdl-layout__tab-panel" id="scroll-tab-3">
			      <div className="page-content">
			      	hola hola hola 
			      </div>
			    </section>
			    <section className="mdl-layout__tab-panel" id="scroll-tab-4">
			      <div className="page-content">
			      	hola hola hola hola 
			      </div>
			    </section>
			</div>
		)
	}
}

class NavBar extends React.Component {
	render () {
		return (

			<div className="demo-layout-transparent mdl-layout mdl-js-layout">
				<Header />
				<Drawer />
				<MainContent />
			</div>
		)
	} 
}

export default NavBar;