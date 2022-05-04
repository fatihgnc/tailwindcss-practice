import ChatMessage from '../ChatMessage';
import { useState } from 'react';
import useChatScroll from '../hooks/useChatScroll';
import { useSelector } from 'react-redux';
import MessageInput from '../MessageInput';
import ChatScreenHeader from '../ChatScreenHeader';

const ChatScreen = () => {
  const { messages } = useSelector((state) => state.message);

  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyingTo, setReplyingTo] = useState('');
  const [messageBeingReplied, setMessageBeingReplied] = useState('');

  const messagesContainerRef = useChatScroll(messages);

  return (
    <div className='flex-1 h-[85vh] w-full bg-gray-700 text-white'>
      <ChatScreenHeader />
      <div
        className='overflow-y-scroll overflow-x-hidden h-[69vh]'
        ref={messagesContainerRef}
      >
        {messages.length > 0 &&
          messages.map((msg) => (
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
      <MessageInput
        replyingTo={replyingTo}
        messageBeingReplied={messageBeingReplied}
        showReplyBox={showReplyBox}
        setShowReplyBox={setShowReplyBox}
      />
    </div>
  );
};

export default ChatScreen;
