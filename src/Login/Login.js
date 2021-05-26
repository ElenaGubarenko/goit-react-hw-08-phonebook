import { Component } from 'react';
import { connect } from 'react-redux';
import selectors from '../redux/selectors/selectors';
import operations from '../redux/operations/operations';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  changeState = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createUserToLogin = e => {
    e.preventDefault();
    const userToLogin = this.state;
    this.props.loginUser(userToLogin);
  };

  render() {
    return (
      <form onSubmit={this.createUserToLogin}>
        <label>
          Mail
          <input
            type="input"
            name="email"
            placeholder="Your mail"
            value={this.state.loginMail}
            onChange={this.changeState}
          ></input>
        </label>
        <label>
          Password
          <input
            type="input"
            name="password"
            placeholder="Your password"
            value={this.state.loginPassword}
            onChange={this.changeState}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(operations.loginUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
