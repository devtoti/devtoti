import Image from 'next/image'
import manIllustration from '../../public/images/toti2.png'
import codingGif from '../../public/images/coding.gif'
import styles from '../../styles/about.module.scss'
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
    <div className={styles.main}>
      <div className={styles.illustration}>

        <div className={styles.innerCircle}></div>
        <div className={styles.outerCircle} id="outerCircle">
          <Image
            src={manIllustration}
            layout="responsive"
            alt="waving man"
          />
          <div className={styles.badge} id="aboutBadge">
            <h3 >Hey Friend!</h3>
          </div>
        </div>

      </div>

        <div className="navBtns">
        <NavigateBeforeIcon value="prev" name="prev" onClick={(e) => handleClick(e)}/>
        <NavigateNextIcon value="next" onClick={(e) => handleClick(e)}/>
        </div>
      <div className={styles.content}>
        {section == 0 &&
          <div className={styles.section}>
            <h3 data-title> About me
            </h3>
            <p> I am a Frontend Developer and Professional Illustrator based in Mexico City. I mostly enjoy building aesthetically pleasing Apps and Websites that cause a positive impact and are easy to use.
            </p>
          </div>
        }
        {section == 1 &&

          <div className={styles.section}>
            <h3 data-title>Education</h3>
            <p> I mostly enjoy building aesthetically</p>
          </div>
        }
        {section == 2 &&

          <div className={styles.section}>
            <h3 data-title>Skills</h3>
            <p>Here is a list of my favorite programs</p>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
              <li>SketchUp</li>
              <li>AutoCAD</li>
            </ul>
            <p>These are my favorite web technologies</p>
            <div className={styles.aboutIcons}>
              <NextIcon />
              <ReactIcon />
              <SassIcon />
            </div>

          </div>
        }
      </div>
    </div>
  )
}
