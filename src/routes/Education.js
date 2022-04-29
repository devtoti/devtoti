import { useState, useEffect } from "react";

function CVTable(...props) {
  let tableData = props[0].arg;
  let tableHeaders = Object.keys(tableData[0]);

  return (
    <div className="ed-table">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            {tableHeaders.map((hdr, ix) => (
              <th key={ix}>{hdr.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, iz) => (
            <tr key={iz}>
              {tableHeaders.map((hdr, iy) => (
                <td key={iy}>{row[hdr]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

let animals = [
  { name: "bookul", color: "black", type: "cat" },
  { name: "canut", color: "yellow", type: "cat" },
  { name: "shwash", color: "gray", type: "hippo" },
  { name: "pluck", color: "red", type: "cat" },
  { name: "rabbies", color: "black", type: "rabbit" },
  { name: "fruttie", color: "green", type: "cat" }
];

let imgs = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
  }
];

let info = {
  firstName: "Antonio",
  lastName: "Ruiz",
  age: 25,
  occupation: "architect"
};

{/* <h2 className="abme-title">
  Hello! 
</h2>
<h3 className="abme-title">My name is {info.firstName + " " + info.lastName}</h3>
<h2> */}
function AboutMe({ info, achs, display }) {
  return (
    <div className="about-me">
      <div className="about-me-txt">
      <h1 className="main-header">
          Education</h1>
          <h2>
          I am a self-taught front-end web developer based in Mexico City who is
          looking for new and exciting experiences.
        </h2>
        <h3>Here are a few things you should know about me:</h3>
      </div>
      {/* <img className="profile-pic" src={imgs[0].imgUrl} /> */}
    </div>
  );
}

export default function Education() {
  let achievements = [
    {
      event: "Education",
      name: "Architect",
      field: "UNAM",
      yearStart: 2016,
      yearEnd: 2022
    },
    {
      event: "Freelancing",
      name: "Programmer",
      field: "Self-taught",
      yearStart: 2019,
      yearEnd: "present"
    },
    {
      event: "Freelancing",
      name: "Graphic Designer",
      field: "Fiverr",
      yearStart: 2021,
      yearEnd: "present"
    },
    {
      event: "Freelancing",
      name: "Sketcher & Illustrator",
      field: "Personal studio",
      yearStart: 2010,
      yearEnd: "present"
    }
  ];
  return (
    <div onClick={() => null}>
      <main className='main-education' style={{ padding: "1rem 0" }}>
        <div className="main-content">
          <AboutMe info={info} />
          {/* <CVTable arg={animals} /> */}
          <CVTable arg={achievements} />
          {/* <h3>Graphic Design - UI - App Design</h3> */}
        </div>
      </main>
    </div>
  );
}
