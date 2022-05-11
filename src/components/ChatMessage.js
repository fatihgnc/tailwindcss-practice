import { AddReaction, Reply } from '@mui/icons-material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getSenderCount,
  getSentEmojis,
  isAnyReactionEmojiSent,
  isMe,
  printReactionEmojiSenders,
} from './helpers/emojiHelpers';
import ReactedEmoji from './ReactedEmoji';
import { messageActions } from './store/message';
import { uiActions } from './store/ui';

const ChatMessage = (props) => {
  const [showReplyIcon, setShowReplyIcon] = useState(false);
  const [showReactIcon, setShowReactIcon] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const messageState = useSelector((state) => state.message);

  const message = messageState.messages.find(
    (message) => message.id === props.id
  );
  const reactedEmojis = message.givenReactions;

  const replyToMessage = (_) => {
    props.setShowReplyBox(true);
    props.setReplyingTo(message.sender);
    props.setMessageBeingReplied(message.messageContent);
  };

  const messageContainerClasses = `w-fit max-w-[70%] pl-1 pt-2 text-white transition rounded-lg relative ${
    isAnyReactionEmojiSent(reactedEmojis)
      ? 'min-w-[15%] mb-3 pb-5'
      : 'min-w-[9%] mb-1 pb-2'
  } ${
    isMe(user.username, message.sender)
      ? 'ml-auto mr-[2%] bg-blue-500 text-white'
      : 'ml-[2%] bg-gray-600'
  }`;

  const replyContainerClasses = `px-2 py-1 ${
    isMe(user.username, message.sender)
      ? 'bg-blue-900 text-white'
      : 'bg-gray-700'
  } rounded-lg text-xs overflow-hidden w-full mb-1`;

  return (
    <div
      className='w-full'
      onMouseEnter={(e) => {
        setShowReactIcon(true);
        setShowReplyIcon(true);
      }}
      onMouseLeave={(e) => {
        setShowReactIcon(false);
        setShowReplyIcon(false);
      }}
      onDoubleClick={replyToMessage}
    >
      <div className={messageContainerClasses}>
        {message.isReply && (
          <div className='pr-1'>
            <div className={replyContainerClasses}>
              <span
                className={`inline-block ${
                  isMe(user.username, message.sender)
                    ? 'text-blue-300'
                    : 'text-gray-400'
                }`}
              >
                {message.replyingTo}
              </span>
              <div className='max-h-[35px] h-fit'>
                <small>{message.messageBeingReplied}</small>
              </div>
            </div>
          </div>
        )}
        {showReplyIcon && (
          <Reply
            onClick={replyToMessage}
            className='absolute top-0 right-1 cursor-pointer'
            sx={{ fontSize: '14px' }}
          />
        )}
        {showReactIcon && !isMe(user.username, message.sender) && (
          <AddReaction
            onClick={(e) => {
              dispatch(messageActions.setCurrentMessageId({ id: message.id }));
              dispatch(uiActions.showReactionEmojis());
            }}
            className='absolute top-[50%] right-[-1.8rem] translate-y-[-50%] cursor-pointer'
            sx={{ fontSize: '17px' }}
          />
        )}
        <small className={`font-extralight absolute text-xs bottom-1 right-1`}>
          {message.sendingDate}
        </small>
        <div>
          <div className='pr-12'>
            <p
              className={`font-normal break-all text-sm w-fit leading-tight pl-1`}
            >
              {message.messageContent}
            </p>
            {isAnyReactionEmojiSent(reactedEmojis) && (
              <div className='min-w-fit absolute inline-flex bottom-[-.5rem] rounded-lg left-2 text-xs bg-gray-500 px-2 py-[.1rem]'>
                {getSentEmojis(reactedEmojis).map((emoji, idx) => (
                  <ReactedEmoji
                    reactedEmojis={reactedEmojis}
                    emoji={emoji}
                    key={idx}
                    printUsers={printReactionEmojiSenders}
                  />
                ))}
                {getSenderCount(reactedEmojis) > 1 && (
                  <small className='absolute bottom-0 right-1'>
                    {getSenderCount(reactedEmojis)}
                  </small>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
