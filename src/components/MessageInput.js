import { Add, EmojiEmotionsOutlined, Send } from '@mui/icons-material';
import ReplyBox from './ReplyBox';
import Picker from 'emoji-picker-react';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from './store/message';
import ChatMenu from './ChatMenu';

const MessageInput = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const msgRef = useRef();

  const [showMenu, setShowMenu] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

  const chooseEmoji = (event, emojiObject) => {
    msgRef.current.value += emojiObject.emoji;
    setShowEmojis(false);
  };

  const toggleEmojis = () => {
    setShowEmojis((oldState) => !oldState);
  };

  const sendMessage = (_, message) => {
    if (message.trim().length === 0) return;
    dispatch(
      messageActions.sendMessage({
        id: Date.now(),
        sender: user.username,
        sendingDate: Date.now(),
        messageContent: message,
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
    <div className='fixed bottom-0 right-0 w-[80vw] py-2 bg-gray-800 text-white'>
      {showEmojis && (
        <div className='absolute top-[-520%] left-0'>
          <Picker native={true} preload={false} onEmojiClick={chooseEmoji} />
        </div>
      )}
      <div className='relative rounded-md'>
        {props.showReplyBox && (
          <ReplyBox
            showReplyBox={props.setShowReplyBox}
            replyingTo={props.replyingTo}
            messageBeingReplied={props.messageBeingReplied}
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
            if (e.key === 'Enter') {
              e.preventDefault();
              sendMessage(e, msgRef.current.value);
            }
          }}
        ></textarea>
        {showMenu && (
          <ChatMenu sendMessage={sendMessage} setShowMenu={setShowMenu} />
        )}
        <Add
          className='absolute top-[50%] translate-y-[-50%] right-[4.5%] cursor-pointer'
          onClick={(e) => setShowMenu(!showMenu)}
        />
        <Send
          fontSize='small'
          className='absolute top-[50%] translate-y-[-50%] right-[1.5%] cursor-pointer'
          onClick={(e) => sendMessage(e, msgRef.current.value)}
        />
      </div>
    </div>
  );
};

export default MessageInput;
