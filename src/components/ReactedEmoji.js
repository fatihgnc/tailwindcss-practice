const ReactedEmoji = (props) => {
  return (
    <div
      key={props.idx}
      title={props.printUsers(props.emoji, props.reactedEmojis)}
      className='rounded-full text-center'
    >
      <span className='inline-block mr-2'>
        {props.emoji}
        <small>{props.reactedEmojis[props.emoji].senders.length}</small>
      </span>
    </div>
  );
};

export default ReactedEmoji;
