import { Avatar } from '@mui/material';
import {
  PhoneCallbackOutlined,
  VideoCallOutlined,
  ShareOutlined,
  StreamOutlined,
  HelpCenterOutlined,
} from '@mui/icons-material';
import StatusCircle from './StatusCircle';

const Nav = () => {
  return (
    <>
      {/* <Drawer /> */}
      <div className='bg-black flex justify-evenly items-center pl-[4em] py-[1.2em] w-full'>
        <div className=' h-[12%] flex items-center justify-center'>
          <span className='text-[45px] font-thin text-white'>
            <b className='text-blue-500 font-bold'>vime</b>soft
          </span>
        </div>
        <div className='flex justify-evenly items-center flex-1'>
          <div className='flex gap-[1em] items-center pl-5'>
            <button className='text-white inline-flex items-center flex-col font-thin gap-[0.4em]'>
              <VideoCallOutlined />
              <span>Meet</span>
            </button>
            <button className='text-white inline-flex items-center flex-col font-thin gap-[0.4em]'>
              <PhoneCallbackOutlined />
              <span>Call</span>
            </button>
            <button className='text-white inline-flex items-center flex-col font-thin gap-[0.4em]'>
              <ShareOutlined />
              <span>Share</span>
            </button>
            <button className='text-white inline-flex items-center flex-col font-thin gap-[0.4em]'>
              <StreamOutlined />
              <span>Stream</span>
            </button>
            <button className='text-white inline-flex items-center flex-col font-thin gap-[0.4em]'>
              <HelpCenterOutlined />
              <span>Help</span>
            </button>
          </div>
          <div className='relative w-[50%] text-center'>
            <input
              type='text'
              placeholder='Search something...'
              className='px-6 py-3 bg-gray-600 text-white placeholder:text-gray-400 outline-none border-none w-[100%] text-sm'
            />
          </div>
          <div className='relative'>
            <Avatar
              variant='rounded'
              sx={{
                backgroundColor: 'white',
                width: 40,
                height: 40,
                color: 'black',
                overflow: 'visible',
              }}
            >
              F
              <StatusCircle bgColor='bg-green-500' />
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
