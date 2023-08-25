import { format } from "date-fns";
import { DayContent, DayContentProps } from "react-day-picker";

export default function DateTime(props: DayContentProps) {
  const dateTime = format(props.date, "yyyy-MM-dd");

  return (
    <time dateTime={dateTime} className="day">
      <DayContent {...props} />
    </time>
  );
}
