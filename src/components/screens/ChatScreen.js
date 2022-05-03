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
import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from '../store/message';
import ReplyBox from '../ReplyBox';

const ChatScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const { messages } = useSelector((state) => state.message);

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [replyingTo, setReplyingTo] = useState('');
  const [messageBeingReplied, setMessageBeingReplied] = useState('');

  const messagesContainerRef = useChatScroll(messages);

  const msgRef = useRef();

  const chooseEmoji = (event, emojiObject) => {
    msgRef.current.value += emojiObject.emoji;
    setShowEmojis(false);
  };

  const toggleEmojis = () => {
    setShowEmojis((oldState) => !oldState);
  };

  const sendMessage = (_) => {
    const messageContent = msgRef.current.value;
    if (messageContent.trim().length === 0) return;
    dispatch(
      messageActions.sendMessage({
        id: Date.now(),
        sender: 'fatihthebach',
        sendingDate: Date.now(),
        messageContent,
        givenReactions: {
          '😃': { senders: [] },
          '😍': { senders: [] },
          '👍': { senders: [] },
          '👎': { senders: [] },
          '😡': { senders: [] },
        },
      })
    );
    msgRef.current.value = '';
  };

  return (
    <div className='flex-1 h-[85vh] w-full bg-gray-700 text-white'>
      <div className='h-[6vh] w-full bg-gray-900 px-12 py-2 mb-4 flex items-center gap-5'>
        <img
          className='w-[25px] h-[25px] rounded-full bg-white flex-shrink-0'
          src='https://source.unsplash.com/random/50x50'
          alt='profile'
        />
        <div className='flex-grow text-sm text-white'>{user.username}</div>
      </div>
      <div
        className='overflow-y-scroll overflow-x-hidden h-[69vh]'
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
            setReplyingTo={setReplyingTo}
            setMessageBeingReplied={setMessageBeingReplied}
            setShowReplyBox={setShowReplyBox}
          />
        ))}
      </div>
      {/* message input */}
      <div className='fixed bottom-0 right-0 w-[80vw] py-2 bg-gray-800 text-white'>
        {showEmojis && (
          <div className='absolute top-[-520%] left-0'>
            <Picker native={true} preload={false} onEmojiClick={chooseEmoji} />
          </div>
        )}
        <div className='relative rounded-md'>
          {showReplyBox && (
            <ReplyBox
              username={user.username}
              showReplyBox={setShowReplyBox}
              replyingTo={replyingTo}
              messageBeingReplied={messageBeingReplied}
            />
          )}
          <EmojiEmotionsOutlined
            onClick={toggleEmojis}
            className='absolute top-[50%] translate-y-[-50%] left-[3%] flex-shrink-0 cursor-pointer'
            fontSize='medium'
          />
          <textarea
            rows={1}
            cols={40}
            name='messageText'
            ref={msgRef}
            placeholder='Type your message..'
            className='ml-[8%] text-[15px] rounded-md px-5 py-3 outline-none bg-gray-500 text-white w-4/5 resize-none flex items-center justify-center'
            onKeyUp={(e) => {
              if (e.key === 'Enter') sendMessage(e);
            }}
          ></textarea>
          {showMenu && (
            <div className='absolute top-[-189%] right-[4%] bg-black text-white'>
              <div className='cursor-pointer px-2 py-2 hover:bg-gray-700'>
                <Add sx={{ fontSize: '14px', marginRight: '.8em' }} />
                <span className='text-sm font-light'>send a file</span>
              </div>
              <div className='cursor-pointer px-2 py-2 hover:bg-gray-700'>
                <LocationOnOutlined
                  sx={{ fontSize: '14px', marginRight: '.8em' }}
                />
                <span className='text-sm font-light'>send location</span>
              </div>
            </div>
          )}
          <Add
            className='absolute top-[50%] translate-y-[-50%] right-[4.5%] cursor-pointer'
            onClick={(e) => setShowMenu(!showMenu)}
          />
          <Send
            fontSize='small'
            className='absolute top-[50%] translate-y-[-50%] right-[1.5%] cursor-pointer'
            onClick={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
