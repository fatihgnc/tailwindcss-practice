const ChatMessage = (props) => {
  return (
    <div className='flex gap-2 justify-start w-[70%] mx-auto px-4 py-3'>
      <div className='pr-2'>
        <div className='w-[40px] h-[40px] rounded-sm bg-black text-white text-[20px] m-2 flex items-center justify-center '>
          {props.sender[0]}
        </div>
      </div>
      <div className='pb-5'>
        <div className='mb-5 pt-3'>
          <span className='font-bold'>{props.sender}</span>
          <small className='ml-12'>{props.sendingDate}</small>
        </div>
        <div>
          <p>{props.messageContent}</p>
          {props.messageEmotes.length > 0 &&
            props.messageEmotes.map((emote) => <span>{emote}</span>)}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
