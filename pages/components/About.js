import Image from 'next/image'
import manIllustration from '../../public/images/toti2.png'
import codingGif from '../../public/images/coding.gif'
import styles from '../../styles/_about.module.scss'
import NextIcon from '../../public/svgIcons/NextIcon'
import ReactIcon from '../../public/svgIcons/ReactIcon'
import SassIcon from '../../public/svgIcons/SassIcon'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState, useRef, useEffect } from 'react'
export default function About() {

  const ref = useRef()
  const [section, setSection] = useState(0)

  function handleClick(e) {
    const el = e.target.getAttribute("value")

    if (el == "next") {
      setSection((prev) => Math.abs((prev + 1)) % 3)
    }
    setSection((prev) => Math.abs((prev + 1)) % 3)

  }
  return (

    <div className={styles.container} id="about">
      <div id="about-watch" ref={ref}>

        <h3 data-title> Antonio Ruiz
        </h3>
        <p>Architect and developer during daylight, werewolf by night. I enjoy building aesthetically pleasing apps and websites.
        </p>
        <button type="button">
          <a href="docs/antonioruiz_resume_frontend.pdf" target="_blank">Resumé</a>
        </button>

      </div>
    </div>
  )
}