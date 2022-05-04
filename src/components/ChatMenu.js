import { Add, LocationOnOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const ChatMenu = (props) => {
  const [coords, setCoords] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className='absolute top-[-189%] right-[4%] bg-black text-white'>
      <div className='cursor-pointer px-2 py-2'>
        <Add sx={{ fontSize: '14px', marginRight: '.8em' }} />
        <span className='text-sm font-light'>send a file</span>
      </div>
      <div className='cursor-pointer px-2 py-2'>
        <LocationOnOutlined sx={{ fontSize: '14px', marginRight: '.8em' }} />
        <span
          className='text-sm font-light'
          onClick={(e) => {
            props.sendMessage(
              e,
              `Current Location: https://google.com/maps?q=${coords.lat},${coords.long}`
            );
            props.setShowMenu(false);
          }}
        >
          send location
        </span>
      </div>
    </div>
  );
};

export default ChatMenu;
