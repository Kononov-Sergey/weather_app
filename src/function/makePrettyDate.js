const weekdayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function makePrettyDate(enteredDate) {
  const date = new Date(enteredDate);
  const weekDayName = weekdayArray[date.getDay()];
  const dayNumder = date.getDate();
  const month = monthArray[date.getMonth()];
  return `${weekDayName}, ${dayNumder} ${month}`;
}
