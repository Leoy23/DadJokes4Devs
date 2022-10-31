import React from 'react';
import './App.css';


type State = {
  jokes: {key: string}[]
}

type Props = {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      jokes: [{
        key: 'placeholder'
      }]
    }
  }
  render() {
    return(
      <h1>Here we go! DadJokes4Devs</h1>
    )
  }
}

export default App;
