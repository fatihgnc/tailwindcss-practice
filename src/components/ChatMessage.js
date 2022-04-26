const ChatMessage = (props) => {
  return (
    <div
      onDoubleClick={(e) => props.handleReactionEmojis((oldState) => !oldState)}
      className={`flex gap-2 justify-start min-w-[18.5%] w-fit max-w-[70%] ml-[10%] pl-1 pr-10 py-1 mb-3 bg-gray-100 transition hover:bg-gray-200 rounded-md relative`}
    >
      {/* reaction emojis */}
      {props.showMessageReactionEmojis && (
        <div className='absolute bottom-[-25px] right-[-40px] flex bg-yellow-200 z-10 rounded-xl min-w-fit px-2 py-1 gap-2 items-center'>
          <button
            // onMouseDown={(e) => {
            //   props.onEmojiSelection(e.target.textContent);
            //   props.setMessageId(props.id);
            // }}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            😃
          </button>
          <button
            // onMouseDown={(e) => {
            //   props.onEmojiSelection(e.target.textContent);
            //   props.setMessageId(props.id);
            // }}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            😍
          </button>
          <button
            // onMouseDown={(e) => {
            //   props.onEmojiSelection(e.target.textContent);
            //   props.setMessageId(props.id);
            // }}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            👍
          </button>
          <button
            // onMouseDown={(e) => {
            //   props.onEmojiSelection(e.target.textContent);
            //   props.setMessageId(props.id);
            // }}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            👎
          </button>
          <button
            // onMouseDown={(e) => {
            //   props.onEmojiSelection(e.target.textContent);
            //   props.setMessageId(props.id);
            // }}
            className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
          >
            😡
          </button>
        </div>
      )}
      {/* message menu */}
      {/* {shouldShowMessageMenu && (
        <>
          <div className='bg-black fixed top-0 right-0 bottom-0 left-0 z-10 opacity-25'></div>
          <div className='absolute right-0 z-50 bottom-[-80px] flex flex-col w-[150px] min-w-fit h-fit bg-black text-white'>
            <div className='flex gap-2 items-center transition duration-300 hover:bg-gray-700 px-3 py-2'>
              <Reply className='' fontSize='small' />
              <span className='text-md font-light'>Reply</span>
            </div>
            <div className='flex gap-2 items-center transition duration-300 hover:bg-gray-700 px-3 py-2'>
              <EmojiEmotions className='' fontSize='small' />
              <span className='text-md font-light'>React</span>
            </div>
          </div>
        </>
      )} */}
      {/* sending date */}
      <small className='ml-12 font-extralight absolute bottom-1 right-1'>
        {props.sendingDate}
      </small>
      {/* sender image */}
      <div className='pr-2'>
        <div className='w-[40px] h-[40px] bg-transparent text-white text-[20px] m-2 flex items-center justify-center'>
          <img
            src='https://source.unsplash.com/random/40x40'
            alt='profile'
            className='bg-cover rounded-full'
          />
        </div>
      </div>
      {/* message content */}
      <div className='pb-5 flex flex-col'>
        <div className='pt-1'>
          <span className='font-bold text-lg'>{props.sender}</span>
        </div>
        <div className='mt-1'>
          <p className='text-sm font-light w-full break-all inline-block'>
            {props.messageContent}
          </p>
          {props.messageEmotes.length > 0 &&
            props.messageEmotes.map((emote, idx) => (
              <span key={idx}>{emote}</span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
