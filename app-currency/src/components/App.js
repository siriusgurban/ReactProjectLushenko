import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      text2: 222,
      fist_name: '',
      age: 0
    }
    this.showText = this.showText.bind(this);
    this.showText2 = this.showText2.bind(this);

  }

  myInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitForm = (e) =>{
    e.preventDefault();
  }

  showText(){
    this.setState({text: 'hi'});
  }

  showText2(e){
    this.setState({text2: e.target.value});
  }

  move(e){
    this.setState(e.target.textContent)
  }


  render() {

    let nav = this.props.nav;

    let a ='';
    if(this.state.text){
      a = <p>Your enter text:{this.state.text}</p>
    }
    else{
      a =''
    }

    return (



      <div className='container'>
        <Header header="Header site"/>
        <Nav nav={nav}/>
        <Footer footer="Copyright"/>
        <hr></hr>
        <button onClick={this.showText}>Push1</button>
        <input onInput={this.showText2}/>
        <div onMouseMove={this.move}>lorem</div>
        <p>{this.state.text}</p>
        <p>{this.state.text2}</p>
        <hr></hr>
        <form>
          <input onChange={this.myInput} name="text"/>
          <input onChange={this.myInput} type="number" name='age'/>
          {a}
          <input type="submit" />
          <p>Age:{this.state.age}</p>
        </form>
      </div>

    )
  }
}
export default App;