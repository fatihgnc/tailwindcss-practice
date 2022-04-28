import { Reply } from '@mui/icons-material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const ChatMessage = (props) => {
  const [showReactionEmojis, setShowReactionEmojis] = useState(false);
  const [showReplyIcon, setShowReplyIcon] = useState(false);
  const [reactedEmojis, setReactedEmojis] = useState({
    '😃': { senders: [] },
    '😍': { senders: [] },
    '👍': { senders: [] },
    '👎': { senders: [] },
    '😡': { senders: [] },
  });

  const user = useSelector((state) => state.user);

  const handleReactionEmojiSelection = (emoji) => {
    setReactedEmojis((oldState) => {
      const selectedEmojiSenders = oldState[emoji].senders;
      if (selectedEmojiSenders.includes(user.username)) {
        const userIdx = selectedEmojiSenders.findIndex(
          (sender) => sender === user.username
        );
        selectedEmojiSenders.splice(userIdx, 1);
      } else {
        selectedEmojiSenders.push(user.username);
      }
      return oldState;
    });
    setShowReactionEmojis(false);
  };

  const getSentEmojis = () =>
    Object.keys(reactedEmojis).filter(
      (emoji) => reactedEmojis[emoji].senders.length > 0
    );
  const isMe = () => user.username === props.sender;
  const isAnyEmojiSent = () =>
    Object.values(reactedEmojis).some((emoji) => emoji.senders.length > 0);

  return (
    <div
      onMouseEnter={(e) => {
        setShowReactionEmojis(true);
        setShowReplyIcon(true);
      }}
      onMouseLeave={(e) => {
        setShowReactionEmojis(false);
        setShowReplyIcon(false);
      }}
      className={`min-w-[15%] w-fit max-w-[70%] pl-2 pt-1 pr-10 pb-5 ${
        isMe() ? 'ml-auto mr-[2%]' : 'ml-[2%]'
      } mb-6 bg-gray-100 transition hover:bg-gray-200 rounded-sm relative`}
    >
      {/* reply icon */}
      {showReplyIcon && (
        <Reply
          className='absolute top-0 right-0 cursor-pointer'
          sx={{ fontSize: '16px' }}
        />
      )}
      {/* reaction emojis */}
      {showReactionEmojis && !isMe() && (
        <div
          className={`absolute bottom-[-30px] ${
            isMe() ? 'left-[-40px]' : 'right-[-40px]'
          } flex bg-blue-500 z-10 rounded-xl min-w-fit p-1 gap-1 text-sm items-center`}
        >
          <button
            onClick={(e) => handleReactionEmojiSelection(e.target.textContent)}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            😃
          </button>
          <button
            onClick={(e) => handleReactionEmojiSelection(e.target.textContent)}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            😍
          </button>
          <button
            onClick={(e) => handleReactionEmojiSelection(e.target.textContent)}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            👍
          </button>
          <button
            onClick={(e) => handleReactionEmojiSelection(e.target.textContent)}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            👎
          </button>
          <button
            onClick={(e) => handleReactionEmojiSelection(e.target.textContent)}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            😡
          </button>
        </div>
      )}
      {/* sending date */}
      <small className={`font-extralight absolute text-xs bottom-1 right-1`}>
        {props.sendingDate}
      </small>
      {/* sender image */}
      {/* <div className='pr-2'>
        <div className='w-[40px] h-[40px] bg-transparent text-white text-[20px] m-2 flex items-center justify-center'>
          <img
            src='https://source.unsplash.com/random/40x40'
            alt='profile'
            className='bg-cover rounded-full'
          />
        </div>
      </div> */}
      {/* message content */}
      <div>
        {/* <div className={`pt-1`}>
          <span className='font-bold text-lg'>{props.sender}</span>
        </div> */}
        <div>
          <p className={`font-light break-all text-sm w-fit leading-tight`}>
            {props.messageContent}
          </p>
          <div
            onMouseEnter={(e) => setShowReactionEmojis(false)}
            onMouseLeave={(e) => setShowReactionEmojis(true)}
            className='min-w-fit absolute inline-flex justify-between bottom-[-18px] left-0 px-1 text-xs rounded-lg'
          >
            {isAnyEmojiSent() &&
              getSentEmojis().map((emoji, idx) => (
                <div key={idx}>
                  <span className='mr-2'>
                    {emoji + ': ' + reactedEmojis[emoji].senders.length}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
