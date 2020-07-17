import React from "react";
import Accordion from "../components/Accordion";

import "../styles.css";

const DetailList = props => {
  console.log("DetailList");
  const { list } = props;
  console.log(list);

  return (
    <div className="detailHeader">
      <h5>List Details:</h5>
      {list.map((item, index) => (
        <div key={index} style={{ marginTop: "20px" }}>
          <h5>List {index + 1}</h5>
          <div>{item.programmerName} </div>
          <div>
            <a href={item.url}>{item.companyName}</a>
          </div>
          <Accordion details={item.projects} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DetailList;
