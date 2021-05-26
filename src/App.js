import PhoneBook from './PhoneBook';
import { connect } from 'react-redux';
import selectors from './redux/selectors/selectors';

function App({ loader }) {
  return (
    <div>
      <PhoneBook />
    </div>
  );
}

// const mapStateToProps = state => ({
//   loader: selectors.getLoader(state),
// });

// export default connect(mapStateToProps, null)(App);
export default App;
