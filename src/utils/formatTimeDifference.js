export const formatTimeDifference = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const differenceInMilliseconds = Math.abs(now - date);
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInWeek = millisecondsInDay * 7;
  const millisecondsInMonth = millisecondsInDay * 30;
  const millisecondsInYear = millisecondsInDay * 365;

  if (differenceInMilliseconds < millisecondsInSecond) {
    return "Just now";
  } else if (differenceInMilliseconds < millisecondsInMinute) {
    const seconds = Math.floor(differenceInMilliseconds / millisecondsInSecond);
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  } else if (differenceInMilliseconds < millisecondsInHour) {
    const minutes = Math.floor(differenceInMilliseconds / millisecondsInMinute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (differenceInMilliseconds < millisecondsInDay) {
    const hours = Math.floor(differenceInMilliseconds / millisecondsInHour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (differenceInMilliseconds < millisecondsInWeek) {
    const days = Math.floor(differenceInMilliseconds / millisecondsInDay);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (differenceInMilliseconds < millisecondsInMonth) {
    const weeks = Math.floor(differenceInMilliseconds / millisecondsInWeek);
    return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (differenceInMilliseconds < millisecondsInYear) {
    const months = Math.floor(differenceInMilliseconds / millisecondsInMonth);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(differenceInMilliseconds / millisecondsInYear);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};
