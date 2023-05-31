export const formattedDate = (date) => {
  const currentDate = new Date();

  // Convert ISO 8601 format to a valid Date object
  const parsedDate = new Date(date);

  // Check if the date is today
  if (parsedDate.toDateString() === currentDate.toDateString()) {
    const diffMinutes = Math.floor((currentDate - parsedDate) / 60000);

    if (diffMinutes < 1) {
      return "Just now";
    } else if (diffMinutes < 60) {
      return diffMinutes + " minute(s) ago";
    } else {
      return Math.floor(diffMinutes / 60) + " hour(s) ago";
    }
  } else {
    // Format the date as "Month Day, Year"
    const options = { month: "long", day: "numeric", year: "numeric" };
    return parsedDate.toLocaleDateString(undefined, options);
  }
};
