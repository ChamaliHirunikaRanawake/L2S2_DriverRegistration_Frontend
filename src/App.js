import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      is: false,
      data: {
        email: "",
        fname: "",
        lname: "",
        pass: "",
        cpass: "",
        pn: "",
        nic: "",
        dlid: "",
        address: "",
      },
      errors: {
        fname: null,
        lname: null,
        pass: null,
        cpass: null,
        pn: null,
        nic: null,
        dlid: null,
        address: null,
        errors: null,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    var is = true;

  

    Object.keys(this.state.data).forEach((e) => {
      this.validation(e, this.state.data[e]);
    });
    Object.keys(this.state.errors).forEach((e) => {
      if (this.state.errors[e] != null) {
        is = false;
      }
    });

    // if (!is) {
    //   window.alert("check inputs")
    //   e.preventDefault();
    //   return false;
    // }
    // console.log("sucsess");

    
    axios.post('http://localhost:3001/Driver/signup', registered)
    .then(response => console.log(response.data))
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ data: { [name]: value } });
    this.validation(name, value, e.target);
  }

  validation(name, value) {
    console.log(name);
    let errors = this.state.errors;
    switch (name) {
      case "fname":
        console.log("fname is call", value);
        errors.fname = value.length < 3 ? "first name is requred" : null;
        break;
      case "email":
        errors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? null
          : "Email is Not Valid";
        break;
      case "pass":
        console.log(value);
        errors.pass =
          value.length < 8 ? "password must be 8 character long" : null;
        break;
      // case "cpass":
      //   errors.cpass = this.state.pass == this.cpass ? null : "password not mach";

      //   break;
      case "pn":
        errors.pn = value.length < 9 ? "Not VAlid" : null;
        break;
      case "nic":
        errors.nic = value.length < 5 ? "Invalid Nic" : null;
        break;
      case "dlid":
        errors.dlid = value.length < 3 ? "driving licen  is requred" : null;
        break;
      case "address":
        errors.address = value.length < 5 ? "address  is requred" : null;
        break;
      default:
    }
  }

  render() {
    let errors = this.state.errors;
    return (
      <div>
        <div className="container">
          <div className="right">
            {" "}
            <img src="https://www.clabservice.com/wp-content/uploads/2017/03/driver.jpg"></img>
          </div>

          <div className="left">
            <h2 className="signup">Driver Sign Up</h2>
            <form className="fm" onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="fname"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.fname}</span>
              <br />
              <input
                type="text"
                name="lname"
                placeholder="Last Name"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.lname}</span>
              <br />
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="E-mail"
                className="form-control"
              />
              <span className="error">{errors.email}</span>
              <br />
              <input
                name="pass"
                type="password"
                onChange={this.handleChange}
                placeholder="Password"
                className="form-control"
              />
              <span className="error">{errors.pass}</span>
              <br />
              <input
                type="password"
                name="cpass"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.cpass}</span>
              <br />
              <input
                type="text"
                name="pn"
                placeholder="Phone Number"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.pn}</span>
              <br />
              <input
                type="text"
                name="nic"
                placeholder="NIC Number"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.nic}</span>
              <br />
              <input
                type="text"
                name="dlid"
                placeholder="Driving Licence Id"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.dlid}</span>
              <br />
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={this.handleChange}
                className="form-control"
              />
              <span className="error">{errors.address}</span>
              <br />
              <input type="submit" className="btn" value="Register" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
