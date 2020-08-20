function convertMinutsToHours(minutes) {
  const hours = (minutes /  60);
  const fixHours = Math.floor(hours);

  const min = (hours - fixHours) * 60;
  const fixMinutes = Math.floor(min);

  const HH = `${fixHours < 10 ? '0' : ''}${fixHours}`
  const MM = `${fixMinutes < 10 ? '0' : ''}${fixMinutes}`;

  return `${HH}:${MM}`;
}

module.exports = { convertMinutsToHours };
