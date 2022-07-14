import React, {Component} from 'react';

class App extends Component {
  msg = () => {
    return <h2> Msg de função</h2>
  }

  dobro = (num) => {
    return  num * 2
  }

  render(){
    return(
      <>
      <h1>Olá</h1>
      {this.msg()}
      <h2>{"O dobro de 4 é " + this.dobro(4)}</h2>
      </>
    )
  }
}
export default App;