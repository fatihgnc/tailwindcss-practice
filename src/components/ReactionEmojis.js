const ReactionEmojis = (props) => {
  return (
    <div
      className={`absolute bottom-[-30px] ${
        props.isMe() ? 'left-[-40px]' : 'right-[-40px]'
      } flex bg-blue-500 z-10 rounded-xl min-w-fit p-1 gap-1 text-sm items-center`}
    >
      <button
        onClick={(e) =>
          props.handleReactionEmojiSelection(e.target.textContent)
        }
        className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
      >
        😃
      </button>
      <button
        onClick={(e) =>
          props.handleReactionEmojiSelection(e.target.textContent)
        }
        className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
      >
        😍
      </button>
      <button
        onClick={(e) =>
          props.handleReactionEmojiSelection(e.target.textContent)
        }
        className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
      >
        👍
      </button>
      <button
        onClick={(e) =>
          props.handleReactionEmojiSelection(e.target.textContent)
        }
        className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
      >
        👎
      </button>
      <button
        onClick={(e) =>
          props.handleReactionEmojiSelection(e.target.textContent)
        }
        className='rounded-full transition duration-300 hover:bg-white p-1 w-6 h-6 inline-flex items-center justify-center cursor-pointer'
      >
        😡
      </button>
    </div>
  );
};

export default ReactionEmojis;
