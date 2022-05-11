export const printReactionEmojiSenders = (emoji, reactedEmojis) => {
  return `${getSendersOfReactionEmojis(emoji, reactedEmojis)
    .map(JSON.stringify)
    .join('\n')
    .replace(/"/gm, '')}`;
};
export const getSendersOfReactionEmojis = (emoji, reactedEmojis) => {
  return reactedEmojis[emoji].senders;
};
export const getSentEmojis = (reactedEmojis) =>
  Object.keys(reactedEmojis).filter(
    (emoji) => reactedEmojis[emoji].senders.length > 0
  );
export const isMe = (currentUser, sender) => currentUser === sender;
export const isAnyReactionEmojiSent = (reactedEmojis) =>
  Object.values(reactedEmojis).some((emoji) => emoji.senders.length > 0);
export const getSenderCount = (reactedEmojis) =>
  Object.keys(reactedEmojis).reduce((acc, emoji) => {
    acc += reactedEmojis[emoji].senders.length;
    return acc;
  }, 0);
