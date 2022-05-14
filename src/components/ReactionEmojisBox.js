import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from './store/message';
import { uiActions } from './store/ui';

const ReactionEmojisBox = (props) => {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => state.user);
  const { selectedMessageId } = useSelector((state) => state.message);

  const hideReactionEmojisBox = (e) => {
    if (e.target.id === 'box-container')
      dispatch(uiActions.hideReactionEmojis());
  };

  const reactToMessage = (e) => {
    dispatch(
      messageActions.giveReactionToMessage({
        id: selectedMessageId,
        emoji: e.target.textContent,
        username,
      })
    );
    dispatch(uiActions.hideReactionEmojis());
  };

  return (
    <div
      onClick={hideReactionEmojisBox}
      className={
        'absolute bottom-0 right-0 left-0 top-0 flex backdrop-blur-lg z-10 rounded-xl min-w-fit p-[.1rem] gap-[.1rem] text-sm items-center justify-center'
      }
      id='box-container'
    >
      <div className='bg-gray-800 w-fit min-w-[50%] h-[20vh] relative rounded-3xl flex justify-between items-center px-10'>
        <button onClick={reactToMessage} className='cursor-pointer text-7xl'>
          😃
        </button>
        <button onClick={reactToMessage} className='cursor-pointer text-7xl'>
          😍
        </button>
        <button onClick={reactToMessage} className=' cursor-pointer text-7xl'>
          👍
        </button>
        <button onClick={reactToMessage} className='cursor-pointer text-7xl'>
          👎
        </button>
        <button onClick={reactToMessage} className='cursor-pointer text-7xl'>
          😡
        </button>
      </div>
    </div>
  );
};

export default ReactionEmojisBox;
