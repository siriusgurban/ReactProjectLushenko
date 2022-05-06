import React from 'react';
import './Container.css';
import Rate from './Rate';

class Container extends React.Component {

  render() {

    return (
      <div>
        <div className='container'>
          <main>

            <Rate/>
            
            <h3>Exchange Calculator</h3>
            <div className='block'>
              <h2>I want to</h2>
              <div><label><input type="radio" defaultValue="radio" />Buy</label></div>
              <div><label><input type="radio" defaultValue="radio" />Sell</label></div>
              <div>
                <input type="number" defaultValue="150"></input>
                <select name="" id="">
                  <option defaultValue="USD">USD</option>
                  <option defaultValue="EUR">EUR</option>
                  <option defaultValue="AZN">AZN</option>
                </select>
              </div>

              <div>
                <h4>Result</h4>
                <ul className='calc-res'>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                </ul>
              </div>

            </div>

          </main>
        </div>

        <div className='container' id='cookie_info'>
          <div className='site-content'>
            <div className='well'>
              In our site we. &nbsp; <button className='btn btn-primary btn-sm'>OK</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Container;

// {
//   constructor(props){
//     super(props);

//     this.state = {
//             title: "Main Menu",
//             subtitle: "Navigation",
//             show: "show"
//   }

//   }

//   showNav=()=>{
//       this.setState({ show : "hide"});
//   }


//   render() {

//     let nav = this.props.nav;

//     return (

//       <nav>
//         <button onClick={this.showNav}>Show menu</button>
//         <h1>{this.state.title}</h1>
//         <h2>{this.state.subtitle}</h2>
//         <p>{this.state.show}</p>
//         <ul className='{textDecoration:none}'>
//           {Object.keys(nav).map(elem => {
//             return <li key={elem}><a href='{nav(elem)}'>{elem}</a></li>
//           })}
//         </ul>
//       </nav>

//     )
//   }