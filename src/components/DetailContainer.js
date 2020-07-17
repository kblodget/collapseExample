//import Accordion from '../components/Accordion';
import DetailHeader from "../components/DetailHeader";
import DetailList from "../components/DetailList";
import React from "react";

import "../styles.css";

const DetailContainer = props => {
  const { data, headerInfo } = props;
  console.log("DetailContainer");
  console.log(headerInfo);
  console.log(data);
  return (
    <div className="detailContainer">
      <DetailHeader header={headerInfo} className="detailHeaderComponent" />
      <DetailList list={data} className="detailListContainer" />
    </div>
  );
};

export default DetailContainer;
