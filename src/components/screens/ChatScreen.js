import ChatMessage from '../ChatMessage';
import { EmojiEmotionsOutlined, Add, Send } from '@mui/icons-material';
import Picker from 'emoji-picker-react';
import { useRef, useState } from 'react';
import useChatScroll from '../hooks/useChatScroll';

const getCurrentTime = () => new Date().toLocaleTimeString().slice(0, -3);

const ChatScreen = () => {
  const [shouldShowEmojis, setShouldShowEmojis] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      sender: 'fatih',
      sendingDate: getCurrentTime(),
      messageContent: 'Merhabalar!',
      messageEmotes: [],
    },
  ]);

  const messagesContainerRef = useChatScroll(messages);

  const msgRef = useRef();

  const chooseEmoji = (event, emojiObject) => {
    msgRef.current.value = msgRef.current.value + emojiObject.emoji;
    setShouldShowEmojis(false);
  };

  const handleShowingEmojis = () => {
    setShouldShowEmojis((oldState) => !oldState);
  };

  const sendMessage = (_) => {
    const messageContent = msgRef.current.value;
    if (messageContent === 0) return;
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
    <div className='flex-1 pt-4 h-[85vh] w-full'>
      <div
        className='overflow-y-scroll overflow-x-hidden h-[75vh]'
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
        {shouldShowEmojis && (
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
          <Add className='absolute top-[50%] translate-y-[-50%] right-[3.5%] cursor-pointer' />
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
