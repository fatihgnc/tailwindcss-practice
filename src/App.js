import Drawer from './components/Drawer';
import Nav from './components/Nav';
import ChatScreen from './components/screens/ChatScreen';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <>
      <Nav />
      <Wrapper>
        <Drawer />
        <ChatScreen />
      </Wrapper>
    </>
  );
}

export default App;
