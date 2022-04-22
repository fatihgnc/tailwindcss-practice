import ChatMessage from '../ChatMessage';

const ChatScreen = () => {
  return (
    <>
      <div className='fixed w-[80%] right-0 top-[15%]'>
        <ChatMessage
          sender='fatih'
          sendingDate='08:10'
          messageContent='Hi... how are you doing?'
          messageEmotes={[]}
        />
        <ChatMessage
          sender='fatih'
          sendingDate='08:10'
          messageContent='Hi... how are you doing?'
          messageEmotes={[]}
        />
        <ChatMessage
          sender='fatih'
          sendingDate='08:10'
          messageContent='Hi... how are you doing?'
          messageEmotes={[]}
        />
        <ChatMessage
          sender='fatih'
          sendingDate='08:10'
          messageContent='Hi... how are you doing?'
          messageEmotes={[]}
        />
      </div>
      <div>
        <input type='text' placeholder='Type message' />
      </div>
    </>
  );
};

export default ChatScreen;
