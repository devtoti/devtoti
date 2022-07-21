import { useState, useEffect } from 'react'
import styles from '../../styles/_cover.module.scss'
import ForestBg from '../../public/svg/ForestBg'
import Moon4 from "../../public/images/moon4.png";
export default function Cover() {
  const [objStyle, setObjStyle] = useState({})
  const [winHeight, setWinHeight] = useState(0)
  const [winWidth, setWinWidth] = useState(0)
  const [objCoords, setObjCoords] = useState({});
  const [isDragging, setIsDragging] = useState(false);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    // window is accessible here.
    setWinHeight(window.innerHeight);
    setWinWidth(window.innerWidth);
    setObjStyle({
      position: "absolute",
      height: window.innerHeight > 1000 ? "650px" : "300px",
      width: window.innerWidth > 1000 ? "650px" : "300px",
    })
  }, []);
  
  
  const handleDrag = (event) => {
    const elem = event.target;
    let windowWidth = window.innerWidth;
    setPercentage((event.pageX * 100) / windowWidth);
    const coords = elem.getBoundingClientRect();
    const elemX = parseInt(event.target.style.width, 10);
    const elemY = parseInt(event.target.style.height, 10);

   if (isDragging) {
      setObjStyle({
        ...objStyle,
        top: event.pageY - elemY / 2 + "px",
        left: event.pageX - elemX / 2 + "px",
        filter: "drop-shadow(0 0 0.75rem #fff1cc)",
        transform: `scale(${0.45 + percentage / 100})`
      });
    }
  };

  const handleMDown = (event) => {
    setIsDragging(true);
    const elem = event.target;
    const coords = elem.getBoundingClientRect();
    console.log(coords)
    setObjCoords(coords);
  };
  const handleMUp = (event) => {
    setIsDragging(false);
    // setObjCoords(event.target.getBoundingClientRect());
  };


  return (
    <div className={styles.container} style={{ minHeight: winHeight }}>
      <section>
        <h2><span>_</span>devtoti</h2>
        <h4>Frontend Designer</h4>
        {/* <h5>Job Portfolio</h5> */}
      </section>
      <ForestBg />
      <div
        className={styles.moon}
        onMouseDown={handleMDown}
        onMouseMove={handleDrag}
        onMouseUp={handleMUp}
        style={objStyle}
      >
        <div className={styles.outer}
         ></div>
        <div className={styles.inner}></div>
      </div>
    </div>
  )

 

}