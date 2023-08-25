import { useState } from "react";
// import { format } from "date-fns";
import { DateTime } from "luxon";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import CustomCaption from "./components/CustomCaption";
import CustomDateTime from "./components/CustomDateTime";
import CustomTableHeadRow from "./components/CustomTableHeadRow";

export default function App() {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    // footer = <p>You picked {format(selected, "PP")}.</p>;
    footer = (
      <p>
        You picked{" "}
        {DateTime.fromISO(selected.toISOString()).toFormat("MMM dd, yyyy")}.
      </p>
    );
  }

  return (
    <div>
      <h1>App</h1>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        showOutsideDays
        components={{
          Caption: CustomCaption,
          DayContent: CustomDateTime,
          HeadRow: CustomTableHeadRow,
        }}
      />
    </div>
  );
}
