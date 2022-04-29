import { useState } from "react";
import Flags from "country-flag-icons/react/3x2";
import { JSIcon, HTMLIcon, CSSIcon, ReactIcon } from "./svg-icons";
import { photoshop, figma, xd, illustrator } from '../imgs/index'

export default function Languages() {
  const [showHtml, setShowHtml] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showReact, setShowReact] = useState(false);

  const contentShowing = [showHtml, showCss, showJs, showReact];
  const isContentShowing = contentShowing.includes(true);

  const languageList = ["HTML", "CSS", "Javascript", "React"];
  const programList = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Figma",
    "Adobe XD"
  ];
  const spokenLanguages = [
    { id: 1, lan: "Spanish", lvl: "Native", unicode: "ES" },
    { id: 0, lan: "English", lvl: "Fluent", unicode: "US" },
    { id: 2, lan: "French", lvl: "Advanced", unicode: "FR" },
    { id: 3, lan: "German", lvl: "Intermediate", unicode: "DE" },
    // { id: 4, lan: "Portuguese", lvl: "Beginner", unicode: "BR" }
  ];

  const Languages = ({ arr }) => {
    return (
      <div className="lang-table">
        <table style={{ width: "80vh" }}>
          <thead></thead>
          <tbody>
            {arr.map((data, ix) => {
              const { lan, lvl, unicode, id } = data;
              let uc = [data.unicode];
              const Table = Flags[uc];
              return (
                <tr key={id}>
                  <td>{lan}</td>
                  <td>{lvl}</td>
                  <td className="flags">
                    <Table key={id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const myPrograms = programList.map((item, ix) => {
    return <p key={ix}>{item}</p>;
  });

  const myLanguages = languageList.map((i, iz) => {
    return <p key={iz}>{i}</p>;
  });

  return (
    <>
      {!isContentShowing && (
        <main className='main-languages' style={{ padding: "1rem 0" }}>
          <h1 className="main-header">Languages</h1>
          <div className="visible-content">
            <h2>Programming skills </h2>
            <div className="languages--section">{myLanguages}</div>
            <div className="languages--block">
              <HTMLIcon setShowHtml={setShowHtml} />
              <CSSIcon setShowCss={setShowCss} />
              <JSIcon setShowJs={setShowJs} />
              <ReactIcon setShowReact={setShowReact} />
            </div>
            <h2 onClick={() => console.log("working")}>Design tools</h2>
            {/* {myPrograms} */}
            <div className="languages--block programs-icons">
              <img src={photoshop}/>
              <img src={illustrator}/>
              <img src={xd}/>
              <img src={figma}/>
            </div>
            <h2>Communication Skills</h2>
            <Languages arr={spokenLanguages} />
          </div>
        </main>
      )}
      {showHtml && <InfoHtml setShowHtml={setShowHtml} />}
      {showCss && <InfoCSS setShowCss={setShowCss} />}
      {showJs && <InfoJs setShowJs={setShowJs} />}
      {showReact && <InfoReact setShowReact={setShowReact} />}
    </>
  );
}
const InfoHtml = ({ setShowHtml }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowHtml((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>HTML</h1>
        <h3>I have knowledge in:</h3>
        <div className="learned">
          {htmlKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>I am currently interested in: </h3>
        <div className="to-learn">
          {htmlToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoCSS = ({ setShowCss }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowCss((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>CSS</h1>
        <h3>I have knowledge in:</h3>
        <div className="learned">
          {cssKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>I am currently interested in: </h3>
        <div className="to-learn">
          {cssToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
const InfoJs = ({ setShowJs }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowJs((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>Javascript</h1>
        <h3>I have knowledge in:</h3>
        <div className="learned">
          {jsKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>I am currently interested in: </h3>
        <div className="to-learn">
          {jsToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
const InfoReact = ({ setShowReact }) => {
  return (
    <div className="lang-info">
      <button
        classname="btn-close"
        type="button"
        onClick={() => setShowReact((c) => !c)}
      >
        X
      </button>
      <div className="lang-section">
        <h1>React</h1>
        <h3>I have knowledge in:</h3>
        <div className="learned">
          {reactKnowledge.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
        <h3>I am currently interested in: </h3>
        <div className="to-learn">
          {reactToDo.map((i, ix) => (
            <p key={ix}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const htmlKnowledge = [
  "DOM manipulation",
  "tree structuring",
  "link navigation",
  "custom forms",
  "accesibility",
  "attributes",
  "layouts",
];

const htmlToDo = ["HTML APIs", "HTML Media", "HTML Graphics","custom references"];

const cssKnowledge = [
  "flexbox",
  "css grid",
  "floats",
  "css box models",
  "positioning",
  "prototypes",
  "responsiveness",
  "media queries",
  "pseudo elements",
  "keyframes"
];

const cssToDo = [
  "effects",
  "transitions",
  "animations",
  "dropdown menus",
  "modern CSS"
];
const jsKnowledge = [
  "JavaScript fundamentals",
  "objects: the basics",
  "data types",
  "managing browser pages",
  "UI events",
  "high order functions",
  "scope closures",
  "hoisting",
  "execution context"
];

const jsToDo = [
  "storing data",
  "advanced events",
  "promises",
  "classes",
  "prototypes",
  "code quality"
];
const reactKnowledge = [
 "functional components",
 "props",
  "state",
 "hooks",
 "components",
 "lifecycle of components",
 "react-router",
 "Nextjs",
 
];

const reactToDo = [
  "useReducer",
  "useContext",
  "useMemo",
  "class components",
  "forms",
];
