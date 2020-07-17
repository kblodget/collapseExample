import React from "react";
import ReactDOM from "react-dom";
import DetailContainer from "./components/DetailContainer";

import "./styles.css";

function App() {
  const sampleData = [
    {
      companyName: "Demo1 Technologies",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      url: "https://www.google.com/",
      programmerName: "jon Smith",
      projects:
        /*
        {
          title: "Full Stack Developer",
          description: "Built and updated various Chrome Extensions.",
          startDate: "2017-01-01",
          endDate: "2017-05-01",
          location: "New York, NY"
        },
        */
        {
          title: "Java Developer",
          description: "Java SprinBoot Rest Application",
          startDate: "2018-01-01",
          endDate: "20178-05-01",
          location: "New York, NY"
        }
    },
    {
      companyName: "Demo2 Technologies",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg",
      url: "https://www.google.com/",
      programmerName: "Mike York",
      projects: {
        title: "UI Designer",
        description: "Design user-fridendly web page",
        startDate: "2016-05-01",
        endDate: "2016-09-01",
        location: "Baltimore, MD"
      }
    }
  ];

  const headerData = {
    headerTitle: "Programmer Listing",
    currentDate: new Date(),
    description: "Loren/dhsiihsih"
  };

  return (
    <div>
      <DetailContainer data={sampleData} headerInfo={headerData} />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
