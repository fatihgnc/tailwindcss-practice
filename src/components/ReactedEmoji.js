const ReactedEmoji = (props) => {
  return (
    <div key={props.idx}>
      <span className='mr-2'>
        {props.emoji + ': ' + props.reactedEmojis[props.emoji].senders.length}
      </span>
    </div>
  );
};

export default ReactedEmoji;
