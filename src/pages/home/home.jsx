import React, { useState } from "react";
import "./home.css";
import { io } from "socket.io-client";

const socket = io("http://localhost:80");

export const Home = () => {
  const [orders, setOrders] = useState([]);
  const id = "bd81c3";
  const department = "fast food";

  socket.on(`/get/order/${id}/${department}`, (data) => {
    setOrders(data);
  });

  // const currentOrder = orders && orders?.filter((item) => item?.status === 0);
  // const newOrders = currentOrder?.sort((a, b) => {
  //   const dateA = new Date(a.receivedAt);
  //   const dateB = new Date(b.receivedAt);
  //   return dateB - dateA;
  // });

  return <div className="new_orders__container">
    
  </div>;
};
