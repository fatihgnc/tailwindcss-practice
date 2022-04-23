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
  ArrowDropDown,
  ArrowDropUp,
} from '@mui/icons-material';
import { useState } from 'react';

const usersInConvo = [
  'First User',
  'Second User',
  'Third User',
  'Fourth User With Long Name',
];

const Drawer = () => {
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const handleDropdown = () => {
    setIsDropdownClicked((isClicked) => !isClicked);
  };

  const usersList = usersInConvo.map((user, idx) => (
    <div
      key={idx}
      className='w-full inline-flex gap-2 items-center justify-start pl-[10%] text-ellipsis whitespace-nowrap overflow-hidden'
    >
      <div className='flex-shrink-0 w-[20px] h-[20px] rounded-sm bg-gray-600 text-white text-[10px] m-2 flex items-center justify-center'>
        {user[0]}
      </div>
      <span className='tracking-widest text-xs text-white' title={user}>
        {user}
      </span>
    </div>
  ));

  return (
    <div className='w-[20%] h-[85vh] overflow-scroll bg-black text-white'>
      {/* drawer items */}
      <div className='w-100 h-100 py-4 px-6'>
        {/* dashboard */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <Dashboard />
          <span className='font-light text-gray-400'>Dashboard</span>
        </div>
        {/* groups */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <GroupOutlined />
          <span className='font-light text-gray-400'>Groups</span>
        </div>
        {/* conversation */}
        <div className='mb-4 w-full'>
          <div
            className='px-3 py-2 flex gap-4 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'
            onClick={handleDropdown}
          >
            <ChatOutlined />
            <span className='inline-flex items-center justify-between font-light text-gray-400 w-full'>
              <span>Conversation</span>
              {usersInConvo.length > 0 ? (
                isDropdownClicked ? (
                  <ArrowDropUp />
                ) : (
                  <ArrowDropDown />
                )
              ) : null}
            </span>
          </div>
          {isDropdownClicked && usersList}
        </div>
        {/* messages */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <MessageOutlined />
          <span className='font-light text-gray-400'>Messages</span>
        </div>
        {/* channels */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <WifiChannelOutlined />
          <span className='font-light text-gray-400'>Channels</span>
        </div>
        {/* files */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <FilePresentOutlined />
          <span className='font-light text-gray-400'>Files</span>
        </div>
        {/* tasks */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <TaskOutlined />
          <span className='font-light text-gray-400'>Tasks</span>
        </div>
        {/* remote learning */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <SchoolOutlined />
          <span className='font-light text-gray-400'>Remote Learning</span>
        </div>
        {/* history */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <HistoryOutlined />
          <span className='font-light text-gray-400'>History</span>
        </div>
        {/* calendar */}
        <div className='flex gap-4 mb-4 px-3 py-2 transition-all ease-in-out hover:bg-gray-700 cursor-pointer'>
          <CalendarMonthOutlined />
          <span className='font-light text-gray-400'>Calendar</span>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
