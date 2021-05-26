import { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../redux/selectors/selectors';
import operations from '../redux/operations/operations';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  changeState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createUserToRegistrate = e => {
    e.preventDefault();
    const userToRegistrate = this.state;
    this.props.registerUser(userToRegistrate);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.createUserToRegistrate}>
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Olol Ololol"
            value={this.state.registerName}
            onChange={this.changeState}
          ></input>
        </label>
        <label>
          Mail
          <input
            type="mail"
            name="email"
            placeholder="ololol@mail.com"
            value={this.state.registerMail}
            onChange={this.changeState}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="ololol123"
            value={this.state.registerPassword}
            onChange={this.changeState}
          ></input>
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  registerUser: selectors.getRegisterUser(state),
});

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(operations.registerUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
// export default Register;
