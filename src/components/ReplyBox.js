const ReplyBox = (props) => {
  return (
    <div className='absolute top-[-155%] px-10 py-2 left-0 w-full bg-gray-800 text-white text-xs h-[8.1vh] overflow-hidden'>
      <small className='border-b border-solid border-white'>
        Replying to: {props.replyingTo}
      </small>
      {/* <ReplyBox id={messageId} /> */}
      <div className='bg-gray-600 rounded-lg px-4 max-w-[90%] h-4/5 overflow-scroll'>
        <span className='inline-block mt-1'>{props.messageBeingReplied}</span>
      </div>
      <div
        onClick={(e) => props.showReplyBox(false)}
        className='absolute top-[50%] right-[0%] translate-y-[-50%] cursor-pointer p-1 h-[100%] w-[10%] inline-flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black'
      >
        X
      </div>
    </div>
  );
};

export default ReplyBox;
