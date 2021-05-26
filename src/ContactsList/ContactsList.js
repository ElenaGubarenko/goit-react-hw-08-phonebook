import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';
import Filter from '../Filter';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
import operations from '../redux/operations/operations';
import selectors from '../redux/selectors/selectors';
import ContactForm from '../ContactForm';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <div>
        <ContactForm />
        <h1>Contacts</h1>
        <Filter />
        <ul className={styles.ContactsList}>
          {(this.props.filter !== ''
            ? this.props.filteredContacts
            : this.props.contacts
          ).map(contact => {
            return (
              <li className={styles.ContactListItem} key={uuidv4()}>
                {contact.name}: {contact.number}
                <button
                  className={styles.Delete}
                  onClick={() => this.props.deleteContact(contact.id)}
                  type="button"
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// ContactsList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func,
// };

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  filter: selectors.getFilter(state),
  filteredContacts: selectors.getFilteredContacts(state),
  isAuthed: selectors.isAuthed(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id)),
  fetchContacts: () => dispatch(operations.getAllContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
