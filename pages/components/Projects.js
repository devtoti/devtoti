import styles from '../../styles/projects.module.scss'
import ProjectCard from '../components/projectCard'
import medizenImg from '../../public/images/medizen.png'
import newiconImg from '../../public/images/newicon.jpg'
import lomadiamanteImg from '../../public/images/lomadiamante.png'
import Image from 'next/image'
import Divider from '@mui/material/Divider';

<<<<<<< HEAD
const medizenLabels = [
=======
export const medizenLabels = [
>>>>>>> design-3.0
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

<<<<<<< HEAD
export default function Projects() {
  console.log(medizenImg)
  return (
    <div className={styles.main}>
       <Divider variant="middle" />
    <h3 data-title> Projects
    </h3>
  
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
    name="Xavier Web Design"
    description="Built and designed custom maps, schemes and graphics for a startup company growing in data science and product analytics." 
    img={medizenImg}
    labels={xavierLabels}
    url="devtoti.github.io/medizen"
    repo="xavier"
    id="2"
    />
    <ProjectCard 
    name="Modeling Portfolio"
    description="Digital modeling book built from scratch for self-promotion purposes. Made for professional photoshootings and casting opportunities." 
    img={newiconImg}
    labels={newIconLabels}
    url="totistyles.vercel.app"
    repo="totistyles"
    id="2"
    />
    <ProjectCard 
    name="Loma Diamante"
    description="Designed the main website for a Mexican real estate development company that sells, rents and renovates existing houses and appartments in Mexico City." 
    img={lomadiamanteImg}
    labels={lomaDiamanteLabels}
    url="lomadiamante.vercel.app"
    repo="loma-diamante"
    id="3"
    />
       <ProjectCard 
    name="Web Illustrations Pack"
    description="Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo." 
    img={lomadiamanteImg}
    labels={webIllustrationsLabels}
    url="lomadiamante.vercel.app"
    repo="loma-diamante"
    id="3"
    />
  </div>
=======


export default function Projects(props) {
  // console.log(medizenImg)
  // console.log(medizenImg.src)
  // console.log(newiconImg.src)

  return (
    <>
      <div className={styles.container} id="section-two">
        {/* <Divider variant="middle" /> */}
        {/* <h3 data-title> Projects</h3> */}

        <ProjectCard
          name="Medizen"
          description="A beautiful App design made for meditating purposes, allowing users to customize a timer and relax while listening to ambient sounds."
          img={medizenImg}
          labels={medizenLabels}
          url="https://devtoti.github.io/medizen"
          repo="medizen/tree/gh-pages"
          id="1"
        />
          <ProjectCard
            name="Lithium Highlights"
            description="A complementary website made for uploading Lithium HTML files and filtering book annotations by content, chapter and colors."
            img={lomadiamanteImg}
            labels={webIllustrationsLabels}
            url="https://devtoti.github.io/lithium-highlights/"
            repo="lithium-highlights/tree/grid-styling"
            id="2"
          />
          <ProjectCard
            name="Cartoon Generator"
            description="React App made for customizing and downloading cartoon portraits based on user data. These portraits are meant to be used as social media profile pictures."
            img={lomadiamanteImg}
            labels={lomaDiamanteLabels}
            url="https://portraitgenerator.vercel.app"
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
          url="https://totistyles.vercel.app"
          repo="totistyles"
          id="4"
        />
        <ProjectCard
          name="Xavier Web Design"
          description="Built and designed custom maps, schemes and graphics for a startup company growing in data science and product analytics."
          img={medizenImg}
          labels={xavierLabels}
          url="https://xavier-theta.vercel.app/"
          repo="xavier"
          id="5"
        />

      </div>
    </>
>>>>>>> design-3.0
  )
}

