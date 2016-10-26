function getShortMessage(messages) {
  var shortMessages = messages.filter(function(text) {
    return text.message.length < 50;
  }).map(function(text) {
      return text.message;
    });
  return shortMessages;
}


module.exports = getShortMessage;
