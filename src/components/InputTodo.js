import React,{ Component } from "react";

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.title);
  }  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." value={this.state.title} onChange={this.onChange} />
        <button>submit</button>
      </form>
    );
  }
}

export default InputTodo;