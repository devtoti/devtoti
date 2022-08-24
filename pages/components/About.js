import Image from 'next/image'
import manIllustration from '../../public/images/toti2.png'
import codingGif from '../../public/images/coding.gif'
import styles from '../../styles/_about.module.scss'
import NextIcon from '../../public/svgIcons/NextIcon'
import ReactIcon from '../../public/svgIcons/ReactIcon'
import SassIcon from '../../public/svgIcons/SassIcon'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react'
export default function About() {

  const [section, setSection] = useState(0)

  function handleClick(e) {
    // console.log(e)
    const el = e.target.getAttribute("value")
    // console.log(el)
    if (el == "next") {
      setSection((prev) => Math.abs((prev + 1)) % 3)
    }
    setSection((prev) => Math.abs((prev + 1)) % 3)
    // console.log(section)
  }
  return (

    <div className={styles.container} id="about">
      <div>

        <h3 data-title> Antonio Ruiz
        </h3>
        <p>Front-end Web Designer and Illustrator with over three years experience in web technologies. I enjoy building aesthetically pleasing and accessible apps to ensure positive, enjoyable user experiences.
        </p>
        <button type="button">
        <a href="docs/antonioruiz_resume_frontend.pdf" target="_blank">Resumé</a>
        </button>
      
      </div>
    </div>
  )
}