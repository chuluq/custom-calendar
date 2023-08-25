// import { format } from "date-fns";
import { DateTime } from "luxon";
import { DayContent, DayContentProps } from "react-day-picker";

export default function CustomDateTime(props: DayContentProps) {
  // const dateTime = format(props.date, "yyyy-MM-dd");

  const dt = DateTime.fromISO(props.date.toISOString());
  const dateTime = dt.toFormat("yyyy-MM-dd");

  // console.log("date", props.date);
  // console.log("format date-fns", dateTime);
  // console.log("date string", props.date.toISOString());
  // console.log("format luxon", dt.toFormat("yyyy-MM-dd"));

  return (
    <time dateTime={dateTime} className="day">
      <DayContent {...props} />
    </time>
  );
}
