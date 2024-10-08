export function addCommas(x: number): string {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatDate(date: Date, format: "date" | "time") {
  const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  const getOrdinalSuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;

  // Format time in 12-hour format with AM/PM
  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // 12-hour format with AM/PM
  });

  if (format === "date") {
    // Return the formatted date
    return `${dayOfWeek}, ${dayWithSuffix} ${month}, ${year}`;
  } else if (format === "time") {
    // Return the formatted time
    return `${time}`;
  }

  // Default to returning the full date if format is not specified
  return `${dayOfWeek}, ${dayWithSuffix} ${month}, ${year} at ${time}`;
}
