function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = hour * 60 + minutes;

  return timeInMinutes;
}

module.exports = { convertHoursToMinutes };
