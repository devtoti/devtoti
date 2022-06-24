import Image from 'next/image'
import manIllustration from '../../public/images/toti2.png'
import codingGif from '../../public/images/coding.gif'
import styles from '../../styles/about.module.scss'
import NextIcon from '../../public/svgIcons/NextIcon'
import ReactIcon from '../../public/svgIcons/ReactIcon'
import SassIcon from '../../public/svgIcons/SassIcon'

export default function About() {
  return (
    <div className={styles.main}
      style={{ border: "1px solid green" }}>
      <div className={styles.illustration}>
   
        <div className={styles.innerCircle}></div>
        <div className={styles.outerCircle} id="outerCircle">
        <Image
          src={manIllustration}
          layout="responsive"
          alt="waving man"
        />
        <div className={styles.badge} id="aboutBadge">
      <h3 >devtoti</h3>
    </div>
        </div>
  
      </div>
    
      <div className={styles.content}>

      <h3 data-title> About
      </h3>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ratione harum laboriosam deleniti molestiae laudantium omnis quo nihil commodi pariatur.
      </p>
      </div>
      <div className={styles.aboutIcons}>
      <NextIcon />
      <ReactIcon />
      <SassIcon />
      </div>
    </div>
  )
}
