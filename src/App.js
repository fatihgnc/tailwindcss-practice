import { Provider } from 'react-redux';
import Drawer from './components/Drawer';
import Nav from './components/Nav';
import ChatScreen from './components/screens/ChatScreen';
import Wrapper from './components/Wrapper';

import store from './components/store/index';

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Wrapper>
        <Drawer />
        <ChatScreen />
      </Wrapper>
    </Provider>
  );
}

export default App;
