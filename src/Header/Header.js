import { Component } from 'react';
// import Register from '../Register';
// import Login from '../Login';
import { connect } from 'react-redux';
import operations from '../redux/operations/operations';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import selectors from '../redux/selectors/selectors';
// import PublicRoute from '../PublicRoute';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div>
        {!this.props.isAuthed ? null : (
          <div className={styles.Header}>
            <div className={styles.Navigation}>
              <NavLink className={styles.Home} to={routes.homepage}>
                Home
              </NavLink>
              <NavLink className={styles.Home} to={routes.contacts}>
                My contacts
              </NavLink>
            </div>
            <div className={styles.MailExit}>
              <h1 className={styles.Home}>{this.props.userMail}</h1>
              <NavLink
                className={styles.Exit}
                onClick={this.props.logoutUser}
                to={routes.homepage}
              >
                Exit
              </NavLink>
            </div>
          </div>
        )}

        {/* <PublicRoute
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
        /> */}
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
