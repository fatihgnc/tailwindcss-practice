const StatusCircle = (props) => {
  return (
    <div
      className={`w-[12px] h-[12px] absolute ${props.bgColor} bottom-[-5%] right-[-5%] rounded-full`}
    />
  );
};

export default StatusCircle;
