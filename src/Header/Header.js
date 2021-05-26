import { Component } from 'react';
import Register from '../Register';
import Login from '../Login';
import { connect } from 'react-redux';
import operations from '../redux/operations/operations';
import { Route, NavLink } from 'react-router-dom';
import routes from '../routes';
import selectors from '../redux/selectors/selectors';
import PublicRoute from '../PublicRoute';

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to={routes.homepage}>Home</NavLink>
        {!this.props.isAuthed ? null : (
          <div>
            <NavLink onClick={this.props.logoutUser} to={routes.homepage}>
              Exit
            </NavLink>
            <h3>Hi, {this.props.userName}.</h3>
            <h3>{this.props.userMail}</h3>
          </div>
        )}
        {this.props.isAuthed ? null : (
          <div>
            <NavLink to={routes.register}>Register</NavLink>
            <NavLink to={routes.login}>Enter</NavLink>
          </div>
        )}
        <PublicRoute
          exact
          restricted
          path={routes.register}
          redirectTo={routes.login}
          component={Register}
        />
        <PublicRoute
          exact
          restricted
          path={routes.login}
          redirectTo={routes.contacts}
          component={Login}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthed: selectors.isAuthed(state),
  userMail: selectors.userMail(state),
  userName: selectors.userName(state),
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(operations.logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;
