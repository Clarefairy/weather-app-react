import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.currentDate.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
  ];
  let month = months[props.currentDate.getMonth()];
  let year = props.currentDate.getFullYear();
  let date = props.currentDate.getDate();
  if (date === 1 || date === 21 || date === 31) {
    date = `${date}st`;
  } else if (date === 2 || date === 22) {
    date = `${date}nd`;
  } else if (date === 3 || date === 23) {
    date = `${date}rd`;
  } else date = `${date}th`;

  let hours = props.currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <strong>
      <span>{day}</span>{" "}
      <span>
        {hours}:{minutes}
      </span>
      <br />
      <span>
        {date} {month} {year}
      </span>
    </strong>
  );
}
