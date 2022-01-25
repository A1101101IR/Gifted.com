import { useState, useEffect } from "react";
const Notification = () => {
  const [notification, setNotification] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/order/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNotification(data.length);
      });
  });
  /* Detta är inte klart än. jag jobbar med det. */
  return <p>{notification}</p>;
};

export default Notification;
