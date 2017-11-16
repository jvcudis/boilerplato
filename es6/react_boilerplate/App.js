import React from 'react'
import ReactDOM from 'react-dom'

// Shared function for buttons
let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super()
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({ val: this.state.val + 1 })
  }

  render() {
    return <InnerComponent update={ this.update } { ...this.state } { ...this.props } />
  }

  componentWillMount() {
    console.log("will mount..")
  }

  componentDidMount() {
    console.log("has mounted...")
  }
}

// Stateless button component
const Button = (props) => <button
                            onClick={ props.update }>
                            { props.txt } - { props.val }
                          </button>

// Stateless label component
const Label = (props) => <label
                            onMouseOver={ props.update }>
                            { props.txt } - { props.val }
                          </label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="Button"/>
        <LabelMixed txt="Label"/>
      </div>
    )
  }
}

export default App
