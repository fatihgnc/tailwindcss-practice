import { useSelector } from 'react-redux';
import Drawer from './components/Drawer';
import Nav from './components/Nav';
import ChatScreen from './components/screens/ChatScreen';
import Wrapper from './components/Wrapper';
import ReactionEmojisBox from './components/ReactionEmojisBox';

function App() {
  const ui = useSelector((state) => state.ui);
  return (
    <>
      {ui.showReactionEmojis && <ReactionEmojisBox />}
      <Nav />
      <Wrapper>
        <Drawer />
        <ChatScreen />
      </Wrapper>
    </>
  );
}

export default App;
