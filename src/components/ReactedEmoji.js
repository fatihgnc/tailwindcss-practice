const ReactedEmoji = (props) => {
  return (
    <div key={props.idx} title={props.printUsers(props.emoji)}>
      <span className='mr-2'>
        {props.emoji + ':' + props.reactedEmojis[props.emoji].senders.length}
      </span>
    </div>
  );
};

export default ReactedEmoji;
