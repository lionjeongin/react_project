import React, { useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import { ko } from "date-fns/locale/ko";

const ReactDatePicker = () => {
  registerLocale(ko);
  setDefaultLocale(ko);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      minDate={new Date()}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="yyyy년 MMMM d일, aa h:mm"
    />
  );
};
export default ReactDatePicker;