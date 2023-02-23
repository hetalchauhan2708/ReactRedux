import store from './reduxcontainer/store';
import { Provider } from 'react-redux';
import Bookcontainer from './reduxcontainer/bookcontainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Bookcontainer />
      </Provider>
    </div>
  );
}

export default App;
