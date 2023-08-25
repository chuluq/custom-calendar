import { format } from "date-fns";
import { CaptionProps, useNavigation } from "react-day-picker";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

export default function CustomCaption({ displayMonth }: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();

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
