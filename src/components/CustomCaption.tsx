import { format } from "date-fns";
// import { DateTime } from "luxon";
import { CaptionProps, useNavigation } from "react-day-picker";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

export default function CustomCaption({ displayMonth }: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

  // const dt = DateTime.fromISO(displayMonth.toISOString());

  // console.log("displayMonth", displayMonth);
  // console.log("format date-fns", format(displayMonth, "yyyy"));
  // console.log("date string", displayMonth.toISOString());
  // console.log("format luxon", dt.year);

  return (
    <div className="monthContainer">
      <button
        disabled={!previousMonth}
        onClick={() => previousMonth && goToMonth(previousMonth)}
        className="btn-icon"
      >
        <ChevronLeft />
      </button>
      <p className="month-text">
        {format(displayMonth, "MMMM")}
        <span className="month-year">{format(displayMonth, "yyyy")}</span>
      </p>
      <button
        disabled={!nextMonth}
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className="btn-icon"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
