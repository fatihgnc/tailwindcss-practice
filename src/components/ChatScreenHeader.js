import { useSelector } from 'react-redux';

const ChatScreenHeader = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className='h-[6vh] w-full bg-gray-900 px-12 py-2 mb-4 flex items-center gap-5'>
      <img
        className='w-[25px] h-[25px] rounded-full bg-white flex-shrink-0'
        src='https://source.unsplash.com/random/50x50'
        alt='profile'
      />
      <div className='flex-grow text-sm text-white'>{user.username}</div>
    </div>
  );
};

export default ChatScreenHeader;
