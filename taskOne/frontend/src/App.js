import React, { Component } from "react";
import axios from "axios";
import { setErrors } from "./setErrors";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    title: "",
    body: "",
    errors: {}
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  validate = (title, body) => {
    const errors = setErrors(title, body);
    this.setState({ errors: errors });
    return Object.values(errors).every((err) => err === "");
  };

  submit = (event) => {
    event.preventDefault();

    const { title, body } = this.state;
    if (this.validate(title, body)) {
      const data = {
        title: this.state.title,
        body: this.state.body,
      };
      console.log(data);
      axios.post("http://localhost:3300/api/save/", data).then((res) => {
        if (res.data.success) {
          this.setState({ title: "", body: "" });
        }
      });
    }
  };
  render() {
    console.log("State: ", this.state);
    return (
      <div className="container">
        <div> Please Submit Form</div>

        <form className="form-input" onSubmit={this.submit}>
          <div className="form-group">
            <label> Name: </label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            {this.state.errors.title && (
              <div className="text-danger"> {this.state.errors.title}</div>
            )}
          </div>

          <div className="form-group">
            <label> About: </label>
            <textarea
              cals="30"
              row="10"
              name="body"
              className="form-control"
              placeholder="body"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
            {this.state.errors.body && (
              <div className="text-danger"> {this.state.errors.body}</div>
            )}
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
