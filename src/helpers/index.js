//surf conditions ratings by color

export const getRatingColor = (getRating) => {
  if (getRating === "FLAT") return "5c626b";
  if (getRating === "VERY_POOR") return "5c626b";
  if (getRating === "POOR") return "f70707";
  if (getRating === "POOR_TO_FAIR") return "f56a07";
  if (getRating === "FAIR") return "2da832";
  if (getRating === "FAIR_TO_GOOD") return "79de26";
  if (getRating === "GOOD") return "26cfde";
  if (getRating === "GOOD_TO_VERY_GOOD") return "26cfde";
  if (getRating === "VERY_GOOD") return "7326de";
  if (getRating === "EPIC") return "3e078a";

  return "-";
};

//Convert wind degree to cardinal direction

export const getWindDirection = (d) => {
  switch (true) {
    case d === 0 || d === 360:
      return "N";
      break;
    case d === 90:
      return "E";
      break;
    case d === 180:
      return "S";
      break;
    case d === 270:
      return "W";
      break;
    case d > 0 && d < 30:
      return "NNE";
      break;
    case d > 30 && d < 60:
      return "NE";
      break;
    case d > 60 && d < 90:
      return "ENE";
      break;
    case d > 90 && d < 120:
      return "ESE";
      break;
    case d > 120 && d < 150:
      return "SE";
      break;
    case d > 150 && d < 180:
      return "SSE";
      break;
    case d > 180 && d < 210:
      return "SSW";
      break;
    case d > 210 && d < 240:
      return "SW";
      break;
    case d > 240 && d < 270:
      return "WSW";
      break;
    case d > 270 && d < 300:
      return "WNW";
      break;
    case d > 300 && d < 330:
      return "NW";
      break;
    case d > 330 && d < 360:
      return "NNW";
      break;
    default:
      return "-";
      break;
  }
};

//tide functions

export const getNormalTides = (getTides) => {
  const normalTides = getTides.filter((tideItem) => tideItem.type === "NORMAL");

  return normalTides;
};

export const getLowTides = (getTides) => {
  const lowTides = getTides.filter((tideItem) => tideItem.type === "LOW");

  return lowTides;
};

export const getHighTides = (getTides) => {
  const highTides = getTides.filter((tideItem) => tideItem.type === "HIGH");

  return highTides;
};

export const getHighAndLowTides = (getTides) => {
  const highAndLowTides = getTides.filter(
    (tideItem) => tideItem.type === "HIGH" || tideItem.type === "LOW"
  );

  return highAndLowTides;
};

export const dailySurfHigh = (getArray, nth) => {
  const dailyHighArray = getArray.filter((e, i) => i % nth === nth - 1);

  return dailyHighArray;
};

/* export const getTimestampClockTime = (getTimestamp) => {
  const timestamp = new Date(timestamp * 1000);

  let hours = timestamp.getHours();
  let minutes = timestamp.getMinutes();

  let formattedTime = hours + ":" + minutes.substr(-2) + ":";

  return formattedTime;
}; */

//return hour in 12 hour format

export const getTimestampHour = (getTimestamp) => {
  const timestamp = new Date(getTimestamp * 1000);

  let hours = timestamp.getHours();
  let timeHours;

  if (hours > 0 && hours <= 12) {
    timeHours = hours;
  } else if (hours > 12) {
    timeHours = hours - 12;
  } else if (hours === 0) {
    timeHours = "12";
  }

  return timeHours;
};

//convert timestamp to readable clock time

export const convertTime = (getTimestamp) => {
  const date = new Date(getTimestamp * 1000);

  const hours = date.getHours();
  const minutes = date.getMinutes();

  let formatHours;

  if (hours > 0 && hours <= 12) {
    formatHours = hours;
  } else if (hours > 12) {
    formatHours = hours - 12;
  } else if (hours === 0) {
    formatHours = "12";
  }

  const formattedTime = `${formatHours}:${minutes < 10 ? "0" : ""}${minutes}${
    hours >= 12 ? "pm" : "am"
  }`;

  return formattedTime;
};

//return every nth element of an array

export const everyNth = (arr, nth) => {
  const newArr = arr.filter((e, i) => i % nth === nth - 1);
  return newArr;
};

export const getDayOfWeek = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[a.getDay()];

  return dayOfWeek;
}
