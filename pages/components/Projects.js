import styles from '../../styles/projects.module.scss'
import ProjectCard from '../components/projectCard'
import medizenImg from '../../public/images/medizen.png'
import newiconImg from '../../public/images/newicon.jpg'
import lomadiamanteImg from '../../public/images/lomadiamante.png'
import Image from 'next/image'
import Divider from '@mui/material/Divider';

export const medizenLabels = [
  "react", "css", "figma"
]
const newIconLabels = [
  "nextjs", "css", "photoshop"
]
const lomaDiamanteLabels = [
  "nextjs", "sass", "figma", "revit"
]
const webIllustrationsLabels = [
  "photoshop", "illustrator", "figma"
]
const xavierLabels = [
  "photoshop", "figma", "graphics"
]



export default function Projects(props) {
  // console.log(medizenImg)
  // console.log(medizenImg.src)
  // console.log(newiconImg.src)

  return (
    <>
      <div className={styles.container} id="section-two">
        <Divider variant="middle" />
        {/* <h3 data-title> Projects</h3> */}

        <ProjectCard
          name="Medizen"
          description="A beautiful App design made for meditating purposes, allowing users to customize a timer and relax while listening to ambient sounds."
          img={medizenImg}
          labels={medizenLabels}
          url="devtoti.github.io/medizen"
          repo="medizen"
          id="1"
        />
          <ProjectCard
            name="Lithium Highlights"
            description="A complementary website made for uploading Lithium HTML files and filtering book annotations by content, chapter and colors."
            img={lomadiamanteImg}
            labels={webIllustrationsLabels}
            url="devtoti.github.io/lithium-highlights/"
            repo="lithium-highlights"
            id="2"
          />
          <ProjectCard
            name="Cartoon Portrait Generator"
            description="React App made for customizing and downloading cartoon portraits based on user data. These portraits are meant to be used as social media profile pictures."
            img={lomadiamanteImg}
            labels={lomaDiamanteLabels}
            url="portraitgenerator.vercel.app"
            repo="cp-generator"
            id="3"
          />
          {/* <ProjectCard
            name="Cartoon Portrait Generator"
            description="Designed the main website for a Mexican real estate development company that sells, rents and renovates existing houses and appartments in Mexico City."
            img={lomadiamanteImg}
            labels={lomaDiamanteLabels}
            url="lomadiamante.vercel.app"
            repo="loma-diamante"
            id="3"
          /> */}
        <ProjectCard
          name="Modeling Portfolio"
          description="Digital modeling book for self-promotion purposes. Made for professional photoshootings and casting opportunities."
          img={newiconImg}
          labels={newIconLabels}
          url="totistyles.vercel.app"
          repo="totistyles"
          id="4"
        />
        <ProjectCard
          name="Xavier Web Design"
          description="Built and designed custom maps, schemes and graphics for a startup company growing in data science and product analytics."
          img={medizenImg}
          labels={xavierLabels}
          url="devtoti.github.io/medizen"
          repo="xavier"
          id="5"
        />

      </div>
    </>
  )
}

