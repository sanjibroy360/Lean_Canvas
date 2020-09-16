import React from "react";

function Icon({ topicNo }) {
  let icons = [
    "https://img.icons8.com/dusk/32/000000/lock-2.png",
    "",
    "https://img.icons8.com/ultraviolet/26/000000/key.png",
    "https://img.icons8.com/officel/22/000000/bar-chart.png",
    "https://img.icons8.com/material-two-tone/30/000000/gift.png",
    "",
    "https://img.icons8.com/dusk/31/000000/fantasy.png",
    "https://img.icons8.com/windows/28/000000/three-way-direction.png",
    "https://img.icons8.com/dusk/34/000000/gender-neutral-user--v1.png",
    "",
    "https://img.icons8.com/pastel-glyph/32/000000/transaction-list--v5.png",
    "https://img.icons8.com/plasticine/55/000000/economic-improvement.png",
  ];

  return <>{icons[topicNo] && <img src={icons[topicNo]} alt="" />}</>;
}

export default Icon;
