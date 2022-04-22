import {
  Dashboard,
  GroupOutlined,
  ChatOutlined,
  MessageOutlined,
  WifiChannelOutlined,
  FilePresentOutlined,
  TaskOutlined,
  SchoolOutlined,
  HistoryOutlined,
  CalendarMonthOutlined,
} from '@mui/icons-material';

const usersInConvo = ['Fatih', 'Öznur', 'Jeffrey', 'Sorloth'];
const Drawer = () => {
  return (
    <div className='w-[20%] max-h-fit overflow-scroll bg-black text-white'>
      {/* drawer items */}
      <div className='w-100 h-100 py-4 px-6'>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <Dashboard />
          <span className='font-light text-gray-400'>Dashboard</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <GroupOutlined />
          <span className='font-light text-gray-400'>Groups</span>
        </div>
        <div className='flex gap-4 mb-1 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <ChatOutlined />
          <span className='font-light text-gray-400'>
            <span>Conversation</span>
            {usersInConvo.map((user, idx) => (
              <div key={idx} className='flex gap-1 items-center justify-start'>
                <div className='w-[15px] h-[15px] rounded-sm bg-white text-black text-[10px] m-2 flex items-center justify-center '>
                  {user[0]}
                </div>
                <span className='tracking-widest text-xs text-white'>
                  {user}
                </span>
              </div>
            ))}
          </span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <MessageOutlined />
          <span className='font-light text-gray-400'>Messages</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <WifiChannelOutlined />
          <span className='font-light text-gray-400'>Channels</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <FilePresentOutlined />
          <span className='font-light text-gray-400'>Files</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <TaskOutlined />
          <span className='font-light text-gray-400'>Tasks</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <SchoolOutlined />
          <span className='font-light text-gray-400'>Remote Learning</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <HistoryOutlined />
          <span className='font-light text-gray-400'>History</span>
        </div>
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <CalendarMonthOutlined />
          <span className='font-light text-gray-400'>Calendar</span>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
