import { Component } from 'react';
import routes from '../routes';
import { NavLink } from 'react-router-dom';
// import Header from '../Header';

class Homepage extends Component {
  render() {
    return (
      <div>
        <NavLink to={routes.contacts}>Contacts</NavLink>
        <h1>Homepage</h1>
      </div>
    );
  }
}

export default Homepage;
