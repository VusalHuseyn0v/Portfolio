import React from "react";
import { social } from "../data/images/dummydata";

export const Footer = () => {
  return (
    <footer>
      {social.map((item) => (
        <i>{item.icon}</i>
      ))}
      <p>All Right Rescved 2025</p>
    </footer>
  );
};
