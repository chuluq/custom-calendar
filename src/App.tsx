import { useState } from "react";
import { addDays, format } from "date-fns";
// import { DateTime } from "luxon";
import { DateFormatter, DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import CustomCaption from "./components/CustomCaption";
// import CustomDateTime from "./components/CustomDateTime";
// import CustomTableHeadRow from "./components/CustomTableHeadRow";

export default function App() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: addDays(new Date(), 4),
    // to: DateTime.now().plus({ days: 3 }).toJSDate(),
  };

  // const [selected, setSelected] = useState<Date>();
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   // footer = <p>You picked {format(selected, "PP")}.</p>;
  //   footer = (
  //     <p>
  //       You picked{" "}
  //       {DateTime.fromISO(selected.toISOString()).toFormat("MMM dd, yyyy")}.
  //     </p>
  //   );
  // }

  const formatWeekdayName: DateFormatter = (date, options) => {
    return <>{format(new Date(date), "EEE", { locale: options?.locale })}</>;
    // return (
    //   <>
    //     {
    //       DateTime.fromISO(date.toISOString(), {
    //         locale: options?.locale?.code,
    //       }).weekdayShort
    //     }
    //   </>
    // );
  };

  return (
    <div>
      <h1>App</h1>
      <DayPicker
        mode="range"
        selected={range}
        onSelect={setRange}
        // footer={footer}
        formatters={{ formatWeekdayName }}
        showOutsideDays
        disabled={{ before: new Date() }}
        components={{
          Caption: CustomCaption,
          // DayContent: CustomDateTime,
          // HeadRow: CustomTableHeadRow,
        }}
      />
    </div>
  );
}
