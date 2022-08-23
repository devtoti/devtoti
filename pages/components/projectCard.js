import React, { useState, useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import InfoIcon from "@mui/icons-material/Info";
import styles from "../../styles/projects.module.scss"

export default function ProjectCard(props) {
  const {
    name,
    description,
    img,
    url,
    repo,
    id,
    labels,
    category,
    about,
    dribbbleUrl
  } = props;
  const [newLabel, setNewLabel] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setNewLabel(labels);
  }, [labels]);

  const displayLables = (labels) => {
    return labels.map((el, id) => (
      <p id={id} key={id < 10 ? `0${id}` : id}>
        {el}
      </p>
    ));
  };

  const showProjectInfo = () => {
    // console.log(ref.current.classList.toggle({styles.active});
    setIsActive(a => !a)
  };

  const activeCard = isActive ? `${styles.card} ${styles.active}` : styles.card
  return (
    <>
      <div className={activeCard} id={id} ref={ref}>
        <div className={`${styles.face} ${styles.front}`}>
          <div className={`${styles.card__header}`}>
            <h1>{name}</h1>
            <h2>{category}</h2>
            <h3>{id < 10 ? `0${id}` : id}</h3>
            <img src={img} alt={category}></img>
            <h4 id={"info" + id} onClick={showProjectInfo}>
              <InfoIcon />
            </h4>
          </div>
          <div className={`${styles.card__content}`}>
            <p>{description}</p>
          </div>
          <div className={styles.card__footer}>
            <hr></hr>
            <div className={styles.chips}>{displayLables(newLabel)}</div>
            <div className={styles.links}>
              <h4>
                <LinkIcon onClick={() => window.open(url, "_blank")} />
              </h4>
              <h4>
                <GitHubIcon onClick={() => window.open(repo, "_blank")} />
              </h4>
              <h4>
                  <a href={dribbbleUrl} target="_blank">
                <img
                  src="images/icons8-dribbble-50.png"
                  alt="Dribbble Logo"
                >

                </img>
                    </a>
              </h4>
            </div>
          </div>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <div className={styles.card__header}>
            <h1>About</h1>
            <h2>{name}</h2>
            <h4 id={"info" + id} onClick={showProjectInfo}>
              <InfoIcon />
            </h4>
          </div>
          <div className={styles.card__content}>
            <p>{about}</p>
          </div>
          <div className={styles.card__footer}></div>
        </div>
      </div>
    </>
  );
}
