
function formatTime(timeString) {
  const [hours, minutes, seconds] = timeString.split(':');
  const formattedTime = `${parseInt(hours)}h ${parseInt(minutes)}min ${parseInt(seconds)}seg`;
  return formattedTime;
}

module.exports = formatTime;
