import { getSenderCount } from './helpers/emojiHelpers';

const ReactedEmoji = (props) => {
  return (
    <div
      key={props.idx}
      title={props.printUsers(props.emoji, props.reactedEmojis)}
    >
      <span
        className={`inline-block ${
          getSenderCount(props.reactedEmojis) > 1 ? 'mr-2' : 'm-0'
        }`}
      >
        {props.emoji}
      </span>
    </div>
  );
};

export default ReactedEmoji;
