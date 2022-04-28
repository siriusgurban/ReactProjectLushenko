import React from 'react';

class Nav extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
            title: "Main Menu",
            subtitle: "Navigation",
            show: "show"
  }

  }

  showNav=()=>{
      this.setState({ show : "hide"});
  }


  render() {

    let nav = this.props.nav;

    return (

      <nav>
        <button onClick={this.showNav}>Show menu</button>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subtitle}</h2>
        <p>{this.state.show}</p>
        <ul className='{textDecoration:none}'>
          {Object.keys(nav).map(elem => {
            return <li><a href='{nav(elem)}'>{elem}</a></li>
          })}
        </ul>
      </nav>

    )
  }
}

export default Nav;