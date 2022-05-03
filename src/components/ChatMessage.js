import { Reply } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactedEmoji from './ReactedEmoji';
import ReactionEmojis from './ReactionEmojis';
import { messageActions } from './store/message';

const ChatMessage = (props) => {
  const [showReactionEmojis, setShowReactionEmojis] = useState(false);
  const [showReplyIcon, setShowReplyIcon] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const messageState = useSelector((state) => state.message);
  const message = messageState.messages.find(
    (message) => message.id === props.id
  );
  const reactedEmojis = message.givenReactions;

  const handleReactionEmojiSelection = (emoji) => {
    dispatch(
      messageActions.giveReactionToMessage({
        username: user.username,
        emoji,
        id: props.id,
      })
    );
    setShowReactionEmojis(false);
    setShowReplyIcon(false);
  };

  const printReactionEmojiSenders = (emoji) => {
    return `${getSendersOfReactionEmojis(emoji)
      .map(JSON.stringify)
      .join('\n')
      .replace(/"/gm, '')}`;
  };
  const getSendersOfReactionEmojis = (emoji) => {
    return reactedEmojis[emoji].senders;
  };
  const getSentEmojis = () =>
    Object.keys(reactedEmojis).filter(
      (emoji) => reactedEmojis[emoji].senders.length > 0
    );
  const isMe = () => user.username === props.sender;
  const isAnyEmojiSent = () =>
    Object.values(reactedEmojis).some((emoji) => emoji.senders.length > 0);

  const messageContainerClasses = `min-w-[15%] w-fit max-w-[70%] pl-2 pt-1 pr-12 text-white pb-3 transition rounded-xl relative ${
    isMe() ? 'ml-auto mr-[2%] bg-blue-500 text-white' : 'ml-[2%] bg-gray-500'
  } ${isAnyEmojiSent() ? 'mb-6' : 'mb-1'}`;

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
      className={messageContainerClasses}
    >
      {/* reply icon */}
      {showReplyIcon && (
        <Reply
          onClick={(e) => {
            props.setShowReplyBox(true);
            props.setReplyingTo(message.sender);
            props.setMessageBeingReplied(props.messageContent);
          }}
          className='absolute top-0 right-1 cursor-pointer'
          sx={{ fontSize: '14px' }}
        />
      )}
      {/* reaction emojis */}
      {showReactionEmojis && !isMe() && (
        <ReactionEmojis
          isMe={isMe}
          handleReactionEmojiSelection={handleReactionEmojiSelection}
        />
      )}
      {/* sending date */}
      <small className={`font-extralight absolute text-xs bottom-1 right-1`}>
        {props.sendingDate}
      </small>
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
            className='min-w-fit absolute inline-flex justify-between bottom-[-15px] left-0 px-1 text-xs rounded-lg'
          >
            {isAnyEmojiSent() &&
              getSentEmojis().map((emoji, idx) => (
                <ReactedEmoji
                  reactedEmojis={reactedEmojis}
                  emoji={emoji}
                  key={idx}
                  printUsers={printReactionEmojiSenders}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
