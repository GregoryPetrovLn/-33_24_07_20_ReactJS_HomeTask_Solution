import React, { Component } from "react";
import classes from "./CommentForm.module.css";
import {AppContext} from '../../App';

export default class extends Component {
  state = {
    inp: "",
    text: "",
  };

  getView = (id,addComment) => {
    return (
      <div>
        <h2>Leave your message</h2>
        <input
          placeholder="Type your name"
          type="text"
          value={this.state.inp}
          onChange={(e) =>
            this.setState({ ...this.state, inp: e.target.value })
          }
        /><br/>
        <textarea 
        placeholder="Type your message"
        value={this.state.text}
        onChange={(e) => this.setState({...this.state,text:e.target.value})}
        /><br/>
        <button onClick={() => {
          addComment(id,this.state.inp,this.state.text);
          this.setState({inp:'',text:''})
        }}>Add comment</button>
      </div>
    );
  }

  render() {
    return <AppContext.Consumer>
      {(context) => this.getView(context.postId,context.addComment)}
    </AppContext.Consumer>
  }
}
