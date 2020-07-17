import React from "react";

import "../styles.css";

const DetailHeader = props => {
  const { headerTitle, currentDate, description } = props.header;
  console.log("detailHeader");
  console.log(props.header);
  const formattedDate = currentDate.toLocaleDateString("en-US");

  return (
    <div className="detailHeader">
      <h3>{headerTitle}</h3>
      <span> Date: {formattedDate} </span>
      <p> {description} </p>
      <hr />
    </div>
  );
};

export default DetailHeader;
