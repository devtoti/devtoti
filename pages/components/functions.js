
const handleDrag = (event) => {
    const elem = event.target;
    let windowWidth = window.innerWidth;
    setPerc((event.pageX * 100) / windowWidth);
    const coords = elem.getBoundingClientRect();
    const elemX = parseInt(event.target.style.width, 10);
    const elemY = parseInt(event.target.style.height, 10);

    if (isDragging && perc < 50) {
      setObjStyle({
        ...objStyle,
        top: event.pageY - elemY / 2 + "px",
        left: event.pageX - elemX / 2 + "px",
        backgroundImage: `url(${Moon1}`,
        filter: "drop-shadow(0 0 0.75rem lightgreen",
        transform: `scale(${0.9 - perc / 100})`
      });
    } else if (isDragging & (perc > 50)) {
      setObjStyle({
        ...objStyle,
        top: event.pageY - elemY / 2 + "px",
        left: event.pageX - elemX / 2 + "px",
        backgroundImage: `url(${Moon3})`,
        filter: "drop-shadow(0 0 0.75rem crimson)",
        transform: `scale(${0.45 + perc / 100})`
      });
    }
  };

const handleMDown = (event, setIsDragging) => {
    setIsDragging(true);
    const elem = event.target;
    const coords = elem.getBoundingClientRect();
    console.log(coords)
    // setObjCoords(coords);
  };

  const handleMUp = (event) => {
    setIsDragging(false);
    // setObjCoords(event.target.getBoundingClientRect());
  };
  const handleMLeave = (event) => {
    // setIsDragging(false);
  };
  const changeSize = (event) => {
    console.log(event.target.id);
    const widthOrHeight = event.target.id;
    setObjStyle({ ...objStyle, [widthOrHeight]: event.target.value + "px" });
  };

  export { handleMDown, handleMLeave, handleMUp, changeSize};