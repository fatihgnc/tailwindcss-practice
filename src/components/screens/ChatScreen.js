import ChatMessage from '../ChatMessage';
import {
  EmojiEmotionsOutlined,
  Add,
  Send,
  LocationOnOutlined,
} from '@mui/icons-material';
import Picker from 'emoji-picker-react';
import { useRef, useState } from 'react';
import useChatScroll from '../hooks/useChatScroll';
import { useSelector } from 'react-redux';

const getCurrentTime = () => new Date().toLocaleTimeString().slice(0, -3);

const ChatScreen = () => {
  const user = useSelector((state) => state.user);

  const [showMenu, setShowMenu] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      sender: 'fatih',
      sendingDate: getCurrentTime(),
      messageContent: 'Merhabalar!',
      messageEmotes: [],
    },
    {
      id: Date.now() + 1,
      sender: 'fatih',
      sendingDate: getCurrentTime(),
      messageContent:
        "Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      messageEmotes: [],
    },
  ]);

  const messagesContainerRef = useChatScroll(messages);

  const msgRef = useRef();

  const chooseEmoji = (event, emojiObject) => {
    msgRef.current.value = msgRef.current.value + emojiObject.emoji;
    setShowEmojis(false);
  };

  const handleShowingEmojis = () => {
    setShowEmojis((oldState) => !oldState);
  };

  const sendMessage = (_) => {
    const messageContent = msgRef.current.value;
    if (messageContent.trim().length === 0) return;
    setMessages((oldMessages) => [
      ...oldMessages,
      {
        id: Date.now(),
        sender: 'fatihthebach',
        sendingDate: getCurrentTime(),
        messageContent,
        messageEmotes: [],
      },
    ]);
    msgRef.current.value = '';
  };

  return (
    <div className='flex-1 h-[85vh] w-full'>
      <div className='h-[10vh] w-full bg-gray-700 px-12 py-2 mb-4 flex items-center gap-5'>
        <img
          className='w-[50px] h-[50px] rounded-full bg-white flex-shrink-0'
          src='https://source.unsplash.com/random/50x50'
          alt='profile'
        />
        <div className='flex-grow text-xl text-white'>{user.username}</div>
      </div>
      <div
        className='overflow-y-scroll overflow-x-hidden h-[65vh]'
        ref={messagesContainerRef}
      >
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            id={msg.id}
            sender={msg.sender}
            sendingDate={msg.sendingDate}
            messageContent={msg.messageContent}
            messageEmotes={msg.messageEmotes}
          />
        ))}
      </div>
      {/* message input */}
      <div className='fixed bottom-0 right-0 w-[80vw] px-8 pb-2'>
        {showEmojis && (
          <Picker native={true} preload={false} onEmojiClick={chooseEmoji} />
        )}
        <div className='relative border border-solid border-black rounded-md'>
          <EmojiEmotionsOutlined
            onClick={handleShowingEmojis}
            className='absolute top-[50%] translate-y-[-50%] left-[1%] flex-shrink-0 cursor-pointer'
            fontSize='medium'
          />
          <textarea
            rows={1}
            cols={40}
            name='messageText'
            ref={msgRef}
            placeholder='Type your message..'
            className='ml-[5%] text-[15px] px-5 py-3 outline-none w-4/5 resize-none flex items-center justify-center'
            onKeyUp={(e) => {
              if (e.key === 'Enter') sendMessage(e);
            }}
          ></textarea>
          {showMenu && (
            <div className='absolute top-[-160%] right-[4%] bg-gray-800 text-white p-2 '>
              <div className='mb-2 cursor-pointer'>
                <Add sx={{ fontSize: '14px', marginRight: '.8em' }} />
                <span className='text-sm font-light'>send a file</span>
              </div>
              <div className='cursor-pointer'>
                <LocationOnOutlined
                  sx={{ fontSize: '14px', marginRight: '.8em' }}
                />
                <span className='text-sm font-light'>send location</span>
              </div>
            </div>
          )}
          <Add
            className='absolute top-[50%] translate-y-[-50%] right-[3.5%] cursor-pointer'
            onClick={(e) => setShowMenu(!showMenu)}
          />
          <Send
            fontSize='small'
            className='absolute top-[50%] translate-y-[-50%] right-[1%] cursor-pointer'
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
