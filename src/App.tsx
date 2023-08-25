import { useState } from "react";
// import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import CustomCaption from "./components/CustomCaption";
import DateTime from "./components/DateTime";
import CustomTableHeadRow from "./components/CustomTableHeadRow";

export default function App() {
  const [selected, setSelected] = useState<Date>();

  // let footer = <p>Please pick a day.</p>;
  // if (selected) {
  //   footer = <p>You picked {format(selected, "PP")}.</p>;
  // }

  return (
    <div>
      <h1>App</h1>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        // footer={footer}
        showOutsideDays
        components={{
          Caption: CustomCaption,
          DayContent: DateTime,
          HeadRow: CustomTableHeadRow,
        }}
      />
    </div>
  );
}
